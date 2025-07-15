import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, Mail, Phone, Building, CalendarIcon } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';

const BookMeetingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: null as Date | null,
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (field: string, value: string | Date | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Book et Møde
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Lad os diskutere hvordan vi kan hjælpe din restaurant med at automatisere processer og forbedre kundeOplevelsen
            </p>
          </div>

          <Card className="bg-background/95 backdrop-blur-md border border-border/50 shadow-elegant">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl text-center text-foreground">Planlæg din gratis konsultation</CardTitle>
              <CardDescription className="text-center text-lg text-muted-foreground mt-4">
                Vi kontakter dig inden for 24 timer for at bekræfte mødet
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">Fornavn *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Dit fornavn"
                        className="pl-12 h-12 text-base border-border/70 focus:border-primary transition-colors"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Efternavn *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Dit efternavn"
                        className="pl-12 h-12 text-base border-border/70 focus:border-primary transition-colors"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="din@email.dk"
                        className="pl-12 h-12 text-base border-border/70 focus:border-primary transition-colors"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Telefon *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+45 12 34 56 78"
                        className="pl-12 h-12 text-base border-border/70 focus:border-primary transition-colors"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="company" className="text-sm font-semibold text-foreground">Restaurant/Virksomhed *</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Navn på din restaurant"
                      className="pl-12 h-12 text-base border-border/70 focus:border-primary transition-colors"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="text-sm font-semibold text-foreground">Hvilken service er du interesseret i? *</Label>
                  <Select onValueChange={(value) => handleChange('service', value)}>
                    <SelectTrigger className="h-12 text-base border-border/70 focus:border-primary">
                      <SelectValue placeholder="Vælg en service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Hjemmeside udvikling</SelectItem>
                      <SelectItem value="automation">Restaurant automatisering</SelectItem>
                      <SelectItem value="ordering">Digital bestillingssystem</SelectItem>
                      <SelectItem value="analytics">Analytics og rapportering</SelectItem>
                      <SelectItem value="all">Alle services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-sm font-semibold text-foreground">Foretrukken dato</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start pl-12 text-base border-border/70 hover:border-primary focus:border-primary transition-colors"
                        >
                          <CalendarIcon className="absolute left-3 h-5 w-5 text-muted-foreground" />
                          {formData.date ? format(formData.date, "dd/MM/yyyy") : "Vælg dato"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={formData.date || undefined}
                          onSelect={(date) => handleChange('date', date || null)}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="time" className="text-sm font-semibold text-foreground">Foretrukken tid</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start pl-12 text-base border-border/70 hover:border-primary focus:border-primary transition-colors"
                        >
                          <Clock className="absolute left-3 h-5 w-5 text-muted-foreground" />
                          {formData.time || "Vælg tidspunkt"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-2" align="start">
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
                            '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
                            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
                            '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
                          ].map((time) => (
                            <Button
                              key={time}
                              variant={formData.time === time ? "default" : "ghost"}
                              size="sm"
                              className="text-sm"
                              onClick={() => handleChange('time', time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Besked (valgfrit)</Label>
                  <Textarea
                    id="message"
                    placeholder="Fortæl os mere om dine behov og udfordringer..."
                    className="min-h-[140px] resize-none text-base border-border/70 focus:border-primary transition-colors"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 h-12 px-8 text-base font-semibold shadow-elegant transition-all hover:shadow-lg hover:scale-105"
                  >
                    Book Møde
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookMeetingForm;