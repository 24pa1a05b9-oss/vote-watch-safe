import { useLocation, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Home, FileText } from "lucide-react";

const ReportSuccess = () => {
  const location = useLocation();
  const incidentId = location.state?.incidentId || "INC-DEMO123";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-large border border-border text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Report Submitted Successfully
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for helping ensure election transparency
            </p>

            {/* Incident ID Card */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Your Incident ID</p>
              <p className="font-display text-2xl font-bold text-foreground tracking-wider">
                {incidentId}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Save this ID to track your report status
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-600">Under Review</span>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-primary/5 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Your Identity is Protected</p>
                  <p className="text-sm text-muted-foreground">
                    Authorities will review this report while maintaining your anonymity. 
                    Evidence will be analyzed and appropriate actions will be taken.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Home className="w-4 h-4" />
                  Return Home
                </Button>
              </Link>
              <Link to="/transparency">
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  <FileText className="w-4 h-4" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportSuccess;
