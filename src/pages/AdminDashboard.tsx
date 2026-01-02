import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Filter,
  Search,
  Eye,
  Shield,
  AlertCircle,
  Image,
  Video,
  ChevronRight,
} from "lucide-react";

// Mock incident data
const mockIncidents = [
  {
    id: "INC-001",
    category: "Violence",
    severity: "critical",
    description: "Physical altercation reported at polling station entrance",
    location: "District 15, Sector B",
    time: "10 mins ago",
    status: "pending",
    hasMedia: true,
    mediaType: "video",
  },
  {
    id: "INC-002",
    category: "Malpractice",
    severity: "high",
    description: "Unauthorized persons inside voting booth area",
    location: "District 8, Main Center",
    time: "25 mins ago",
    status: "reviewing",
    hasMedia: true,
    mediaType: "image",
  },
  {
    id: "INC-003",
    category: "Misinformation",
    severity: "medium",
    description: "Fake voting instructions being distributed",
    location: "District 22, Zone C",
    time: "45 mins ago",
    status: "verified",
    hasMedia: true,
    mediaType: "image",
  },
  {
    id: "INC-004",
    category: "Accessibility",
    severity: "low",
    description: "Wheelchair ramp blocked at polling station",
    location: "District 3, Center A",
    time: "1 hour ago",
    status: "resolved",
    hasMedia: false,
    mediaType: null,
  },
  {
    id: "INC-005",
    category: "Violence",
    severity: "high",
    description: "Threatening behavior towards election officials",
    location: "District 11, Zone D",
    time: "1.5 hours ago",
    status: "escalated",
    hasMedia: true,
    mediaType: "video",
  },
];

const severityColors: Record<string, string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-amber-500",
  low: "bg-emerald-500",
};

const statusBadges: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Pending", variant: "secondary" },
  reviewing: { label: "Under Review", variant: "outline" },
  verified: { label: "Verified", variant: "default" },
  resolved: { label: "Resolved", variant: "default" },
  escalated: { label: "Escalated", variant: "destructive" },
};

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedIncident, setSelectedIncident] = useState<typeof mockIncidents[0] | null>(null);

  const filteredIncidents = mockIncidents.filter((incident) => {
    const matchesSearch = incident.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = severityFilter === "all" || incident.severity === severityFilter;
    const matchesStatus = statusFilter === "all" || incident.status === statusFilter;
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground">Monitor and verify election incidents</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Live Feed Active</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <Card className="border-red-500/20 bg-red-500/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">Critical</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">High</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-500/20 bg-amber-500/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">28</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-500/20 bg-emerald-500/5">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">156</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Incident Feed */}
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader className="border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="font-display text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                      Live Incident Feed
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9 w-40"
                        />
                      </div>
                      <Select value={severityFilter} onValueChange={setSeverityFilter}>
                        <SelectTrigger className="w-28">
                          <SelectValue placeholder="Severity" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border z-50">
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {filteredIncidents.map((incident) => (
                      <div
                        key={incident.id}
                        className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                          selectedIncident?.id === incident.id ? "bg-muted/50" : ""
                        }`}
                        onClick={() => setSelectedIncident(incident)}
                      >
                        <div className="flex items-start gap-3">
                          {/* Severity Indicator */}
                          <div className={`w-3 h-3 rounded-full mt-1.5 ${severityColors[incident.severity]}`} />
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-xs text-muted-foreground">{incident.id}</span>
                              <Badge variant={statusBadges[incident.status].variant} className="text-xs">
                                {statusBadges[incident.status].label}
                              </Badge>
                            </div>
                            <p className="text-sm font-medium text-foreground mb-1 line-clamp-1">
                              {incident.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {incident.location}
                              </span>
                              <span>{incident.time}</span>
                              {incident.hasMedia && (
                                <span className="flex items-center gap-1">
                                  {incident.mediaType === "video" ? (
                                    <Video className="w-3 h-3" />
                                  ) : (
                                    <Image className="w-3 h-3" />
                                  )}
                                </span>
                              )}
                            </div>
                          </div>

                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Incident Detail Panel */}
            <div className="lg:col-span-1">
              <Card className="border-border/50 sticky top-24">
                <CardHeader className="border-b border-border">
                  <CardTitle className="font-display text-lg flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Incident Detail
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedIncident ? (
                    <div className="space-y-6">
                      {/* ID & Status */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Incident ID</p>
                        <p className="font-mono font-semibold text-foreground">{selectedIncident.id}</p>
                      </div>

                      {/* Severity */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Severity</p>
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${severityColors[selectedIncident.severity]}`} />
                          <span className="font-medium text-foreground capitalize">{selectedIncident.severity}</span>
                        </div>
                      </div>

                      {/* Category */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Category</p>
                        <p className="font-medium text-foreground">{selectedIncident.category}</p>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Description</p>
                        <p className="text-sm text-foreground">{selectedIncident.description}</p>
                      </div>

                      {/* Location */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Location</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-sm text-foreground">{selectedIncident.location}</span>
                        </div>
                      </div>

                      {/* Media Preview */}
                      {selectedIncident.hasMedia && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">Evidence</p>
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            {selectedIncident.mediaType === "video" ? (
                              <Video className="w-8 h-8 text-muted-foreground" />
                            ) : (
                              <Image className="w-8 h-8 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col gap-2 pt-4 border-t border-border">
                        <Button variant="default" className="w-full">
                          <CheckCircle className="w-4 h-4" />
                          Mark as Verified
                        </Button>
                        <Button variant="outline" className="w-full">
                          Escalate to Police
                        </Button>
                        <Button variant="secondary" className="w-full">
                          Close Incident
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Eye className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Select an incident to view details
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
