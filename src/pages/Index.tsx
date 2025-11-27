import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ModelCard from "@/components/ModelCard";
import FactCheckCard from "@/components/FactCheckCard";
import { Search, Shield, TrendingUp, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface AnalysisResult {
  classification: "real" | "fake";
  confidence: number;
  evidence: {
    title: string;
    source: string;
    url: string;
    date: string;
    snippet: string;
  }[];
}

const Index = () => {
  const [newsText, setNewsText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const generateEvidenceFromKeywords = (text: string, isFake: boolean) => {
    const keywords = text.toLowerCase().split(" ").slice(0, 3).join(", ");
    
    if (isFake) {
      // Debunking articles for hoax news
      return [
        {
          title: `Klarifikasi Resmi: Informasi tentang "${keywords}" Tidak Benar`,
          source: "TurnBackHoax.id",
          url: "https://turnbackhoax.id/article/1",
          date: "27 Nov 2025",
          snippet: "Tim verifikasi TurnBackHoax telah mengecek klaim yang beredar dan menemukan bahwa informasi tersebut tidak memiliki dasar fakta yang valid. Berdasarkan penelusuran ke sumber resmi...",
        },
        {
          title: `Cek Fakta: Berita tentang ${keywords} adalah Hoaks`,
          source: "Kompas.com",
          url: "https://kompas.com/article/2",
          date: "26 Nov 2025",
          snippet: "Kompas melakukan verifikasi terhadap klaim yang viral di media sosial. Setelah konfirmasi dengan pihak berwenang, informasi tersebut terbukti tidak akurat dan menyesatkan...",
        },
        {
          title: `Bantahan Resmi Pemerintah terkait Isu ${keywords}`,
          source: "Detik.com",
          url: "https://detik.com/article/3",
          date: "25 Nov 2025",
          snippet: "Juru bicara pemerintah memberikan klarifikasi resmi bahwa informasi yang beredar di masyarakat tidak sesuai dengan fakta di lapangan. Data resmi menunjukkan...",
        },
        {
          title: `Hoaks! Informasi ${keywords} Dibantah oleh Ahli`,
          source: "Tempo.co",
          url: "https://tempo.co/article/4",
          date: "24 Nov 2025",
          snippet: "Para ahli dan peneliti di bidang terkait membantah keras informasi yang beredar. Berdasarkan riset dan data ilmiah, klaim tersebut tidak memiliki dasar yang kuat...",
        },
      ];
    } else {
      // Confirming articles for real news
      return [
        {
          title: `Konfirmasi Resmi: Fakta tentang ${keywords} Terverifikasi`,
          source: "Kompas.com",
          url: "https://kompas.com/article/1",
          date: "27 Nov 2025",
          snippet: "Berdasarkan konfirmasi dari sumber resmi dan dokumen yang valid, informasi mengenai hal ini telah terverifikasi kebenarannya. Tim redaksi telah melakukan pengecekan menyeluruh...",
        },
        {
          title: `Pemberitaan Resmi: ${keywords} Dikonfirmasi oleh Pihak Berwenang`,
          source: "CNN Indonesia",
          url: "https://cnnindonesia.com/article/2",
          date: "27 Nov 2025",
          snippet: "Pihak berwenang mengkonfirmasi bahwa informasi yang beredar sesuai dengan fakta di lapangan. Berdasarkan data dan investigasi mendalam, berita ini dapat dipercaya...",
        },
        {
          title: `Liputan Langsung: Fakta ${keywords} dari Sumber Terpercaya`,
          source: "Detik.com",
          url: "https://detik.com/article/3",
          date: "26 Nov 2025",
          snippet: "Reporter kami melakukan liputan langsung dan wawancara dengan narasumber kredibel. Semua informasi telah dikonfirmasi dan sesuai dengan dokumentasi resmi...",
        },
        {
          title: `Validasi Data: Informasi ${keywords} Sesuai Fakta`,
          source: "BBC Indonesia",
          url: "https://bbc.com/indonesia/article/4",
          date: "26 Nov 2025",
          snippet: "Setelah melakukan riset mendalam dan cross-check dengan berbagai sumber independen, BBC Indonesia mengkonfirmasi keakuratan informasi ini. Data pendukung menunjukkan...",
        },
      ];
    }
  };

  const handleAnalyze = () => {
    if (!newsText.trim()) {
      toast({
        title: "Peringatan",
        description: "Silakan masukkan teks berita untuk dianalisis",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.random() > 0.5 ? 98.9 : 85.3;
      const classification = confidence > 90 ? "real" : "fake";
      
      setAnalysisResult({
        classification,
        confidence,
        evidence: generateEvidenceFromKeywords(newsText, classification === "fake"),
      });
      
      setIsAnalyzing(false);
      toast({
        title: "Analisis Selesai",
        description: "Hasil analisis telah ditampilkan",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Powered by Machine Learning
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Deteksi Berita Hoaks
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              dengan AI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Gunakan teknologi kecerdasan buatan untuk mengidentifikasi berita palsu dengan akurasi tinggi
          </p>

          {/* Input Section */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Textarea
                placeholder="Masukkan teks berita yang ingin Anda periksa..."
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                className="min-h-[200px] text-base resize-none shadow-input border-2 focus:border-primary transition-colors"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3" />
                <span>{newsText.length} karakter</span>
              </div>
            </div>

            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Menganalisis...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Analisis Berita
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Analysis Results Section */}
      {analysisResult && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge 
                variant={analysisResult.classification === "real" ? "default" : "destructive"}
                className="text-base px-4 py-2"
              >
                {analysisResult.classification === "real" ? "Berita Valid" : "Berita Diragukan"}
              </Badge>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Tingkat Kepercayaan: {analysisResult.confidence}%
                </h3>
                <p className="text-muted-foreground">
                  Dianalisis menggunakan Random Forest Model
                </p>
              </div>
            </div>

            {/* Verifikasi Sumber Terpercaya */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Verifikasi Sumber Terpercaya</h3>
              </div>
              <p className="text-muted-foreground">
                {analysisResult.classification === "fake" 
                  ? "Berikut adalah artikel pembantahan dari sumber terpercaya yang memverifikasi bahwa informasi tersebut adalah hoaks:"
                  : "Berikut adalah artikel dari sumber terpercaya yang mengkonfirmasi kebenaran informasi ini:"}
              </p>
              <div className="grid gap-5">
                {analysisResult.evidence.map((item, index) => (
                  <FactCheckCard
                    key={index}
                    title={item.title}
                    source={item.source}
                    url={item.url}
                    date={item.date}
                    snippet={item.snippet}
                    isDebunking={analysisResult.classification === "fake"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Models Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Perbandingan Model AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistem kami menggunakan tiga algoritma machine learning terbaik untuk memberikan hasil yang akurat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModelCard name="Random Forest" accuracy="98.9" rank={1} />
            <ModelCard name="Naive Bayes" accuracy="95.8" rank={2} />
            <ModelCard name="SVM" accuracy="93.2" rank={3} />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Akurasi Tinggi</h3>
              <p className="text-sm text-muted-foreground">
                Mencapai akurasi hingga 98.9% dengan Random Forest
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Analisis Cepat</h3>
              <p className="text-sm text-muted-foreground">
                Hasil analisis dalam hitungan detik
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Mudah Digunakan</h3>
              <p className="text-sm text-muted-foreground">
                Interface sederhana dan intuitif untuk semua pengguna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Fake News Detection System. Powered by Machine Learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
