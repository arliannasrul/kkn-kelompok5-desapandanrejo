
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Image as ImageIcon, Video, Play, ExternalLink, Sparkles, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { summarizeArchivedDocument } from "@/ai/flows/summarize-archived-document-flow";
import { toast } from "@/hooks/use-toast";

export function ArchiveGallery() {
  const [activeCategory, setActiveCategory] = useState("articles");
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [summarizingStates, setSummarizingStates] = useState<Record<string, boolean>>({});

  const archives = {
    articles: [
      { 
        id: 1, 
        title: "Mahasiswa KKN Unmer Malang Ciptakan Mesin Pirolisis: Ubah Sampah Plastik Jadi Bahan Bakar Alternatif", 
        excerpt: "Kab Malang, IP - Mahasiswa KKN Universitas Merdeka (Unmer) Malang berhasil merancang mesin pengelolaan sampah plastik yang mampu mengubah limbah plastik", 
        content: "Kab Malang, IP - Mahasiswa KKN Universitas Merdeka (Unmer) Malang berhasil merancang mesin pengelolaan sampah plastik yang mampu mengubah limbah plastik menjadi bahan bakar alternatif bernilai. Inovasi ini diwujudkan dalam program KKN di Desa Pandanrejo, Kabupaten Malang, sebagai respons proaktif terhadap masalah pengelolaan sampah lokal.\n\nDalam kegiatan ini, mahasiswa memberikan sosialisasi mengenai pembuatan arang briket dan pemanfaatan mesin pirolisis kepada warga setempat. Mesin pirolisis bekerja dengan memanaskan plastik tanpa oksigen untuk menguraikannya menjadi bahan bakar cair yang bisa dimanfaatkan. Proses ini diharapkan tidak hanya membantu desa dalam mengurangi volume sampah anorganik, tetapi juga memberikan alternatif energi yang lebih ekonomis bagi masyarakat............",
        url: "https://inspirasipendidikan.co.id/2026/02/mahasiswa-kkn-unmer-malang-ciptakan-mesin-pirolisis-ubah-sampah-plastik-jadi-bahan-bakar-alternatif/"
      }
    ],
    pkm: [
      { 
        id: 3, 
        title: "Optimalisasi Pengelolaan Sampah Plastik Melalui Teknologi Mesin Pirolisis Sebagai Sumber Bahan Bakar Alternatif", 
        type: "PKM AI", 
        content: "Scientific document regarding the chemical analysis of local waste materials processed into high-quality organic fertilizer for apple trees in Pandanrejo.",
        fileUrl: "/pkm-ai.pdf"
      }
    ],
    posters: [
      { id: 4, title: "Poster KKN Mesin Pirolisis", imageUrl: "/poster.jpg.webp" }
    ],
    videos: [
      { id: 6, title: "Video Profile Program Kerja", duration: "05:20", imageId: "video-thumbnail", url: "https://youtu.be/fqH4ZKYUDPg?si=Obq3TuNbqdYNURGb" }
    ]
  };

  const handleSummarize = async (source: { type: 'content' | 'pdf' | 'url', value: string }, id: string) => {
    setSummarizingStates(prev => ({ ...prev, [id]: true }));
    try {
      const input: any = {};
      if (source.type === 'content') input.documentContent = source.value;
      if (source.type === 'pdf') input.pdfPath = source.value;
      if (source.type === 'url') input.websiteUrl = source.value;

      const result = await summarizeArchivedDocument(input);
      setSummaries(prev => ({ ...prev, [id]: result.summary }));
      toast({ title: "Ringkasan Berhasil", description: "AI telah berhasil menganalisa dokumen/sumber asli Anda." });
    } catch (error) {
      toast({ title: "Gagal Merangkum", description: "Terjadi kesalahan saat mengekstrak sumber dokumen.", variant: "destructive" });
    } finally {
      setSummarizingStates(prev => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section id="archive" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Arsip Luaran</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">Koleksi Karya Dokumentasi</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seluruh hasil pemikiran, riset, dan dokumentasi visual yang dihasilkan selama masa KKN tersedia di sini untuk publik.
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 p-1 rounded-full h-auto">
              <TabsTrigger value="articles" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                <FileText className="w-4 h-4 mr-2" /> Artikel
              </TabsTrigger>
              <TabsTrigger value="pkm" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Sparkles className="w-4 h-4 mr-2" /> PKM AI
              </TabsTrigger>
              <TabsTrigger value="posters" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                <ImageIcon className="w-4 h-4 mr-2" /> Poster
              </TabsTrigger>
              <TabsTrigger value="videos" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Video className="w-4 h-4 mr-2" /> Video Profile
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="articles" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {archives.articles.map(article => (
                <Card key={article.id} className="group hover:shadow-lg transition-all border-border/50">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">Baca Selengkapnya</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-headline text-primary mb-4">{article.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap">{article.content}</p>
                          {article.url && (
                             <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                               <a href={article.url} target="_blank" rel="noopener noreferrer">
                                 Baca Artikel Asli di Inspirasi Pendidikan <ExternalLink className="w-4 h-4 ml-2" />
                               </a>
                             </Button>
                          )}
                          <div className="bg-secondary/30 p-6 rounded-xl border border-accent/20">
                            <h5 className="flex items-center gap-2 font-bold text-primary mb-3">
                              <Sparkles className="w-4 h-4 text-accent" /> Ringkasan AI
                            </h5>
                            {summaries[`article-${article.id}`] ? (
                              <p className="text-sm italic">{summaries[`article-${article.id}`]}</p>
                            ) : (
                              <Button 
                                onClick={() => handleSummarize({ type: article.url ? 'url' : 'content', value: article.url || article.content }, `article-${article.id}`)} 
                                disabled={summarizingStates[`article-${article.id}`]}
                                className="w-full bg-accent text-primary hover:bg-accent/80"
                              >
                                {summarizingStates[`article-${article.id}`] ? "Mengekstrak Sumber Asli..." : "Buat Ringkasan Otomatis dari Sumber Berita"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {article.url ? (
                      <Button variant="ghost" size="icon" className="text-muted-foreground" asChild>
                        <a href={article.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" /></a>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" className="text-muted-foreground"><ExternalLink className="w-4 h-4" /></Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pkm" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 gap-8">
              {archives.pkm.map(doc => (
                <Card key={doc.id} className="border-accent/20 bg-accent/5">
                   <CardHeader className="flex flex-row items-center gap-6">
                     <div className="p-4 bg-primary text-white rounded-2xl">
                        <FileText className="w-8 h-8" />
                     </div>
                     <div>
                        <CardTitle className="text-2xl font-headline text-primary">{doc.title}</CardTitle>
                        <CardDescription>Format: PKM Artikel Ilmiah (PKM AI)</CardDescription>
                     </div>
                   </CardHeader>
                   <CardContent className="flex gap-4">
                     <Dialog>
                        <DialogTrigger asChild>
                           <Button className="bg-primary hover:bg-primary/90">Preview Dokumen</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                           <DialogHeader>
                              <DialogTitle className="font-headline text-2xl">{doc.title}</DialogTitle>
                           </DialogHeader>
                           <div className="space-y-6">
                              <div className="w-full aspect-[4/3] bg-muted rounded-xl overflow-hidden border border-border">
                                {doc.fileUrl ? (
                                  <iframe src={doc.fileUrl} className="w-full h-full" title={doc.title} />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                                    <FileText className="w-12 h-12 mb-2" />
                                    <p>File tidak tersedia</p>
                                  </div>
                                )}
                              </div>
                              <div className="bg-secondary/30 p-6 rounded-xl border border-accent/20">
                                <h5 className="flex items-center gap-2 font-bold text-primary mb-3">
                                  <Sparkles className="w-4 h-4 text-accent" /> Ringkasan AI
                                </h5>
                                {summaries[`pkm-${doc.id}`] ? (
                                   <div className="p-4 bg-background rounded-lg border border-border/50 text-left">
                                      <p className="text-sm leading-relaxed">{summaries[`pkm-${doc.id}`]}</p>
                                   </div>
                                ) : (
                                   <Button 
                                     onClick={() => handleSummarize({ type: doc.fileUrl ? 'pdf' : 'content', value: doc.fileUrl || doc.content }, `pkm-${doc.id}`)} 
                                     disabled={summarizingStates[`pkm-${doc.id}`]}
                                     className="w-full bg-accent text-primary hover:bg-accent/80"
                                   >
                                     {summarizingStates[`pkm-${doc.id}`] ? "Mengekstrak Teks PDF..." : "Buat Ringkasan Otomatis dari PDF"}
                                   </Button>
                                )}
                              </div>
                           </div>
                        </DialogContent>
                     </Dialog>
                     <Button variant="outline" asChild>
                        <a href={doc.fileUrl || "/pkm-ai.pdf"} target="_blank" rel="noopener noreferrer">Unduh PDF</a>
                     </Button>
                   </CardContent>
                </Card>
              ))}
             </div>
          </TabsContent>

          <TabsContent value="posters" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {archives.posters.map(poster => (
                  <Dialog key={poster.id}>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-zoom-in bg-muted">
                        {poster.imageUrl && (
                          <Image
                            src={poster.imageUrl}
                            alt={poster.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ImageIcon className="text-white w-10 h-10" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] md:max-w-4xl h-[90vh] p-0 overflow-hidden border-none bg-transparent shadow-none flex flex-col justify-center items-center">
                       {poster.imageUrl && (
                         <TransformWrapper initialScale={1} minScale={0.5} maxScale={4} centerOnInit>
                           {({ zoomIn, zoomOut, resetTransform }) => (
                             <div className="relative w-full h-full flex flex-col bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm">
                               <div className="absolute top-4 right-4 z-50 flex gap-2">
                                 <Button variant="secondary" size="icon" onClick={() => zoomIn(0.5)}><ZoomIn className="w-4 h-4" /></Button>
                                 <Button variant="secondary" size="icon" onClick={() => zoomOut(0.5)}><ZoomOut className="w-4 h-4" /></Button>
                                 <Button variant="secondary" size="icon" onClick={() => resetTransform()}><RotateCcw className="w-4 h-4" /></Button>
                               </div>
                               <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
                                 <div className="relative w-full h-full min-h-[50vh] md:min-h-[80vh] flex items-center justify-center">
                                    <img
                                      src={poster.imageUrl as string}
                                      alt={poster.title}
                                      className="max-h-full max-w-full object-contain pointer-events-auto cursor-grab active:cursor-grabbing"
                                    />
                                 </div>
                               </TransformComponent>
                             </div>
                           )}
                         </TransformWrapper>
                       )}
                    </DialogContent>
                  </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {archives.videos.map(video => {
               const videoImg = PlaceHolderImages.find(img => img.id === video.imageId);

               // Konversi URL ke format embed
               const getEmbedUrl = (url: string) => {
                 // YouTube: https://youtu.be/ID atau https://www.youtube.com/watch?v=ID
                 const ytShort = url.match(/youtu\.be\/([^?&]+)/);
                 const ytWatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
                 const ytId = ytShort?.[1] || ytWatch?.[1];
                 if (ytId) return `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;

                 // Google Drive: https://drive.google.com/file/d/FILE_ID/view
                 const gdrive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
                 if (gdrive?.[1]) return `https://drive.google.com/file/d/${gdrive[1]}/preview`;

                 return url;
               };

               return (
                 <Dialog key={video.id}>
                   <DialogTrigger asChild>
                     <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                       {videoImg?.imageUrl && (
                         <Image
                           src={videoImg.imageUrl}
                           alt={video.title}
                           fill
                           className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                         />
                       )}
                       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                       <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                             <Play className="w-8 h-8 fill-current ml-1" />
                          </div>
                          <h4 className="text-3xl font-headline font-bold mb-2">{video.title}</h4>
                          <p className="text-accent/80 font-medium">Durasi: {video.duration}</p>
                          <p className="text-white/50 text-sm mt-2">Klik untuk memutar video</p>
                       </div>
                    </div>
                   </DialogTrigger>
                   <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-black shadow-2xl">
                     <DialogHeader className="sr-only">
                       <DialogTitle>{video.title}</DialogTitle>
                     </DialogHeader>
                     <div className="relative aspect-video w-full bg-black">
                       <iframe
                         src={getEmbedUrl(video.url)}
                         title={video.title}
                         className="w-full h-full"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         allowFullScreen
                       />
                     </div>
                     <div className="p-4 bg-black/90">
                       <h4 className="text-white font-headline font-bold text-lg">{video.title}</h4>
                       <p className="text-white/50 text-sm mt-1">Durasi: {video.duration} · KKN Kelompok 5 Unmer Malang</p>
                     </div>
                   </DialogContent>
                 </Dialog>
               );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
