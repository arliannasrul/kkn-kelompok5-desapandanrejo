
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Image as ImageIcon, Video, Play, ExternalLink, Sparkles } from "lucide-react";
import { summarizeArchivedDocument } from "@/ai/flows/summarize-archived-document-flow";
import { toast } from "@/hooks/use-toast";

export function ArchiveGallery() {
  const [activeCategory, setActiveCategory] = useState("articles");
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const archives = {
    articles: [
      { id: 1, title: "Potensi Wisata Pandanrejo", excerpt: "Mengenal kekayaan alam dan budaya desa...", content: "Full text content about the beautiful village of Pandanrejo, highlighting its unique water springs and traditional dances. The village is located in the hills of Wagir with fertile soil and friendly people." },
      { id: 2, title: "Digitalisasi UMKM", excerpt: "Langkah awal membawa produk desa ke dunia...", content: "Comprehensive article about how KKN Group 5 helped local artisans setup social media business accounts and digital payment systems." }
    ],
    pkm: [
      { id: 3, title: "Inovasi Pupuk Organik Cair", type: "PKM AI", content: "Scientific document regarding the chemical analysis of local waste materials processed into high-quality organic fertilizer for apple trees in Pandanrejo." }
    ],
    posters: [
      { id: 4, title: "Poster Sosialisasi Kesehatan", imageId: "poster-1" },
      { id: 5, title: "Poster Festival Desa", imageId: "hero-bg" }
    ],
    videos: [
      { id: 6, title: "Video Profil Desa Pandanrejo", duration: "05:20", imageId: "video-thumbnail", url: "#" }
    ]
  };

  const handleSummarize = async (text: string) => {
    setIsSummarizing(true);
    setSummary(null);
    try {
      const result = await summarizeArchivedDocument({ documentContent: text });
      setSummary(result.summary);
      toast({ title: "Ringkasan Berhasil", description: "AI telah merangkum dokumen Anda." });
    } catch (error) {
      toast({ title: "Gagal Merangkum", description: "Terjadi kesalahan saat menghubungi AI.", variant: "destructive" });
    } finally {
      setIsSummarizing(false);
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
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-headline text-primary mb-4">{article.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-lg leading-relaxed text-foreground/80">{article.content}</p>
                          <div className="bg-secondary/30 p-6 rounded-xl border border-accent/20">
                            <h5 className="flex items-center gap-2 font-bold text-primary mb-3">
                              <Sparkles className="w-4 h-4 text-accent" /> Ringkasan AI
                            </h5>
                            {summary ? (
                              <p className="text-sm italic">{summary}</p>
                            ) : (
                              <Button 
                                onClick={() => handleSummarize(article.content)} 
                                disabled={isSummarizing}
                                className="w-full bg-accent text-primary hover:bg-accent/80"
                              >
                                {isSummarizing ? "Menganalisis..." : "Buat Ringkasan Otomatis"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" className="text-muted-foreground"><ExternalLink className="w-4 h-4" /></Button>
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
                        <DialogContent className="max-w-3xl">
                           <DialogHeader>
                              <DialogTitle className="font-headline text-2xl">{doc.title}</DialogTitle>
                           </DialogHeader>
                           <div className="aspect-[4/5] bg-muted flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl p-10 text-center">
                              <FileText className="w-16 h-16 text-muted-foreground mb-4" />
                              <h4 className="font-bold text-xl mb-2">Simulasi Preview Dokumen PKM</h4>
                              <p className="text-muted-foreground mb-6">{doc.content}</p>
                              <Button variant="outline" onClick={() => handleSummarize(doc.content)} disabled={isSummarizing}>
                                 {isSummarizing ? "Generating Summary..." : "Summarize with AI"}
                              </Button>
                              {summary && (
                                 <div className="mt-8 p-4 bg-white rounded-lg shadow-sm text-left">
                                    <h5 className="font-bold text-primary mb-2">Key Takeaways:</h5>
                                    <p className="text-sm">{summary}</p>
                                 </div>
                              )}
                           </div>
                        </DialogContent>
                     </Dialog>
                     <Button variant="outline">Unduh PDF</Button>
                   </CardContent>
                </Card>
              ))}
             </div>
          </TabsContent>

          <TabsContent value="posters" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {archives.posters.map(poster => {
                const posterImg = PlaceHolderImages.find(img => img.id === poster.imageId);
                return (
                  <Dialog key={poster.id}>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-zoom-in">
                        {posterImg?.imageUrl && (
                          <Image
                            src={posterImg.imageUrl}
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
                    <DialogContent className="max-w-xl p-0 overflow-hidden border-none bg-transparent shadow-none">
                       <div className="relative aspect-[2/3] w-full">
                          {posterImg?.imageUrl && (
                            <Image
                              src={posterImg.imageUrl}
                              alt={poster.title}
                              fill
                              className="object-contain"
                            />
                          )}
                       </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {archives.videos.map(video => {
               const videoImg = PlaceHolderImages.find(img => img.id === video.imageId);
               return (
                 <div key={video.id} className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                    {videoImg?.imageUrl && (
                      <Image
                        src={videoImg.imageUrl}
                        alt={video.title}
                        fill
                        className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                      />
                    )}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                       <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center mb-6 shadow-glow animate-pulse">
                          <Play className="w-8 h-8 fill-current ml-1" />
                       </div>
                       <h4 className="text-3xl font-headline font-bold mb-2">{video.title}</h4>
                       <p className="text-accent/80 font-medium">Duration: {video.duration}</p>
                    </div>
                 </div>
               );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
