import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  MapPin,
  Upload,
  Camera,
  Video,
  AlertTriangle,
  Shield,
  Lock,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const incidentCategories = [
  { value: "violence", label: "Violence", icon: "🔴" },
  { value: "malpractice", label: "Malpractice", icon: "🟠" },
  { value: "misinformation", label: "Misinformation", icon: "🟡" },
  { value: "accessibility", label: "Accessibility Issue", icon: "🔵" },
  { value: "other", label: "Other", icon: "⚪" },
];

const severityLevels = [
  { value: "low", label: "Low", color: "bg-emerald-500", description: "Minor issue, no immediate threat" },
  { value: "medium", label: "Medium", color: "bg-amber-500", description: "Moderate concern, needs attention" },
  { value: "high", label: "High", color: "bg-orange-500", description: "Serious issue, urgent action needed" },
  { value: "critical", label: "Critical", color: "bg-red-500", description: "Emergency, immediate intervention required" },
];

const ReportIncident = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [photos, setPhotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!category || !severity || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const incidentId = `INC-${Date.now().toString(36).toUpperCase()}`;
    
    navigate("/report/success", { state: { incidentId } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Secure Reporting</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Report an Election Incident
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your report helps ensure election integrity. All submissions are encrypted and your identity is protected.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Incident Category */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                Incident Category *
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border z-50">
                  {incidentCategories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Severity Level */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                Severity Level *
              </Label>
              <RadioGroup value={severity} onValueChange={setSeverity} className="grid grid-cols-2 gap-3">
                {severityLevels.map((level) => (
                  <label
                    key={level.value}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      severity === level.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <RadioGroupItem value={level.value} className="mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${level.color}`} />
                        <span className="font-medium text-foreground">{level.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Description */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                Description *
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what happened in detail. Include who was involved, what you observed, and any other relevant information..."
                className="min-h-[150px] resize-none"
              />
            </div>

            {/* Evidence Upload */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                Upload Evidence
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Photo Upload */}
                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors">
                  <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm font-medium text-foreground">Upload Photos</span>
                  <span className="text-xs text-muted-foreground mt-1">JPEG, PNG (max 5)</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                  {photos.length > 0 && (
                    <span className="text-xs text-accent mt-2">{photos.length} file(s) selected</span>
                  )}
                </label>

                {/* Video Upload */}
                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors">
                  <Video className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm font-medium text-foreground">Upload Video</span>
                  <span className="text-xs text-muted-foreground mt-1">MP4 (max 60 sec)</span>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                  {video && (
                    <span className="text-xs text-accent mt-2">{video.name}</span>
                  )}
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <Label className="text-base font-semibold text-foreground mb-4 block">
                Location
              </Label>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <MapPin className="w-5 h-5 text-accent" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">GPS Auto-Detection</p>
                  <p className="text-xs text-muted-foreground">Your location will be captured automatically</p>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
            </div>

            {/* Reporter Mode */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {isAnonymous ? (
                      <Lock className="w-5 h-5 text-primary" />
                    ) : (
                      <Shield className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {isAnonymous ? "Anonymous Report" : "Verified Report"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isAnonymous 
                        ? "Your identity will not be disclosed" 
                        : "Verify via OTP for credibility boost"}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={!isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(!checked)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Submit Report
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to our{" "}
              <a href="#" className="text-accent hover:underline">Privacy Policy</a> and{" "}
              <a href="#" className="text-accent hover:underline">Terms of Service</a>.
              All data is encrypted and securely stored.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportIncident;
