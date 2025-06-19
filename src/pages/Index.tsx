
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, XCircle, Instagram, Youtube, Music } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [step, setStep] = useState(1);
  const [businessData, setBusinessData] = useState({
    instagram: '',
    youtube: '',
    tiktok: '',
    website: ''
  });
  const [creatorData, setCreatorData] = useState({
    instagram: '',
    youtube: '',
    tiktok: ''
  });
  const [results, setResults] = useState(null);
  const { toast } = useToast();

  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    if (!businessData.instagram && !businessData.youtube && !businessData.tiktok) {
      toast({
        title: "Missing Information",
        description: "Please provide at least one social media account.",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleCreatorSubmit = (e) => {
    e.preventDefault();
    if (!creatorData.instagram && !creatorData.youtube && !creatorData.tiktok) {
      toast({
        title: "Missing Information", 
        description: "Please provide at least one creator social media account.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate analysis
    const compatibility = Math.floor(Math.random() * 100) + 1;
    const reasons = generateMatchReasons(compatibility);
    
    setResults({
      compatibility,
      reasons,
      recommendation: compatibility >= 70 ? 'excellent' : compatibility >= 50 ? 'good' : 'poor'
    });
    setStep(3);
  };

  const generateMatchReasons = (score) => {
    const reasons = [];
    if (score >= 70) {
      reasons.push("Similar target audience demographics");
      reasons.push("Complementary content themes");
      reasons.push("High engagement rate alignment");
    } else if (score >= 50) {
      reasons.push("Moderate audience overlap");
      reasons.push("Some content synergy potential");
    } else {
      reasons.push("Limited audience overlap");
      reasons.push("Different content focus areas");
    }
    return reasons;
  };

  const resetForm = () => {
    setStep(1);
    setBusinessData({ instagram: '', youtube: '', tiktok: '', website: '' });
    setCreatorData({ instagram: '', youtube: '', tiktok: '' });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Creator Match Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover if a creator is the perfect match for your brand. Our advanced analysis compares 
            social media profiles to find ideal partnerships for affiliate and ambassador programs.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
          </div>
        </div>

        {/* Step 1: Business Information */}
        {step === 1 && (
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Your Business Information</CardTitle>
              <CardDescription className="text-gray-600">
                Enter your social media accounts and website to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBusinessSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="business-instagram" className="flex items-center gap-2 text-gray-700">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      Instagram Handle
                    </Label>
                    <Input
                      id="business-instagram"
                      placeholder="@yourbusiness"
                      value={businessData.instagram}
                      onChange={(e) => setBusinessData({...businessData, instagram: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="business-youtube" className="flex items-center gap-2 text-gray-700">
                      <Youtube className="w-4 h-4 text-red-500" />
                      YouTube Channel
                    </Label>
                    <Input
                      id="business-youtube"
                      placeholder="@yourbusiness or channel URL"
                      value={businessData.youtube}
                      onChange={(e) => setBusinessData({...businessData, youtube: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="business-tiktok" className="flex items-center gap-2 text-gray-700">
                      <Music className="w-4 h-4 text-black" />
                      TikTok Handle
                    </Label>
                    <Input
                      id="business-tiktok"
                      placeholder="@yourbusiness"
                      value={businessData.tiktok}
                      onChange={(e) => setBusinessData({...businessData, tiktok: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="business-website" className="text-gray-700">
                      Website URL (Optional)
                    </Label>
                    <Input
                      id="business-website"
                      placeholder="https://yourbusiness.com"
                      value={businessData.website}
                      onChange={(e) => setBusinessData({...businessData, website: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3">
                  Continue to Creator Info
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Creator Information */}
        {step === 2 && (
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Creator Information</CardTitle>
              <CardDescription className="text-gray-600">
                Enter the creator's social media accounts to analyze compatibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatorSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="creator-instagram" className="flex items-center gap-2 text-gray-700">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      Creator's Instagram Handle
                    </Label>
                    <Input
                      id="creator-instagram"
                      placeholder="@creator"
                      value={creatorData.instagram}
                      onChange={(e) => setCreatorData({...creatorData, instagram: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="creator-youtube" className="flex items-center gap-2 text-gray-700">
                      <Youtube className="w-4 h-4 text-red-500" />
                      Creator's YouTube Channel
                    </Label>
                    <Input
                      id="creator-youtube"
                      placeholder="@creator or channel URL"
                      value={creatorData.youtube}
                      onChange={(e) => setCreatorData({...creatorData, youtube: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="creator-tiktok" className="flex items-center gap-2 text-gray-700">
                      <Music className="w-4 h-4 text-black" />
                      Creator's TikTok Handle
                    </Label>
                    <Input
                      id="creator-tiktok"
                      placeholder="@creator"
                      value={creatorData.tiktok}
                      onChange={(e) => setCreatorData({...creatorData, tiktok: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button type="button" onClick={() => setStep(1)} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Analyze Match
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Match Analysis Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Compatibility Score */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-2xl font-bold text-white mb-4 ${
                  results.recommendation === 'excellent' ? 'bg-green-500' : 
                  results.recommendation === 'good' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {results.compatibility}%
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {results.recommendation === 'excellent' ? 'Excellent Match!' : 
                   results.recommendation === 'good' ? 'Good Match' : 'Poor Match'}
                </h3>
                <p className="text-gray-600">
                  {results.recommendation === 'excellent' ? 'This creator would be an ideal partner for your brand.' :
                   results.recommendation === 'good' ? 'This creator could be a suitable partner with some considerations.' :
                   'This creator may not be the best fit for your brand at this time.'}
                </p>
              </div>

              {/* Analysis Reasons */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Analysis Insights:</h4>
                <div className="space-y-2">
                  {results.reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {results.recommendation !== 'poor' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation Badge */}
              <div className="flex justify-center">
                <Badge 
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-medium ${
                    results.recommendation === 'excellent' ? 'bg-green-100 text-green-800' :
                    results.recommendation === 'good' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {results.recommendation === 'excellent' ? 'Recommended for Partnership' :
                   results.recommendation === 'good' ? 'Consider for Partnership' :
                   'Not Recommended'}
                </Badge>
              </div>

              <Button onClick={resetForm} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Analyze Another Creator
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
