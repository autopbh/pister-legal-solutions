import { useState } from 'react';
import { Mail, Phone, Copy, Eye, EyeOff, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProtectedContactProps {
  email?: string;
  phone?: string;
  type: 'email' | 'phone';
  variant?: 'split' | 'reveal' | 'protected';
  className?: string;
}

const ProtectedContact = ({ 
  email = 'kontakt@pister-law.de', 
  phone = '+49 (0) 30 123 456 789',
  type,
  variant = 'split',
  className = ''
}: ProtectedContactProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { toast } = useToast();

  const handleCopyAttempt = () => {
    toast({
      title: "🔒 Contenu protégé",
      description: "Les coordonnées sont protégées contre la copie automatisée. Veuillez utiliser le bouton d'affichage.",
      variant: "destructive"
    });
  };

  const formatSplitEmail = (email: string) => {
    const [local, domain] = email.split('@');
    return (
      <span className="font-medium">
        {local} <span className="text-accent">@</span> {domain}
      </span>
    );
  };

  const formatSplitPhone = (phone: string) => {
    const parts = phone.replace(/\s/g, '').match(/(\+\d{2})(\(\d\))(\d{2})(\d{3})(\d{3})(\d{3})/);
    if (parts) {
      return (
        <span className="font-medium">
          {parts[1]} <span className="text-accent">{parts[2]}</span> {parts[3]} <span className="text-accent">•</span> {parts[4]} <span className="text-accent">•</span> {parts[5]} <span className="text-accent">•</span> {parts[6]}
        </span>
      );
    }
    return phone;
  };

  if (variant === 'reveal') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className="flex items-center space-x-2">
          {type === 'email' ? <Mail className="h-5 w-5 text-accent" /> : <Phone className="h-5 w-5 text-accent" />}
          {!isRevealed ? (
            <span className="text-muted-foreground font-medium">
              {type === 'email' ? 'Adresse e-mail protégée' : 'Numéro protégé'}
            </span>
          ) : (
            <span className="font-medium">
              {type === 'email' ? email : phone}
            </span>
          )}
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsRevealed(!isRevealed)}
          className="border-accent/20 text-accent hover:bg-accent/10"
        >
          {isRevealed ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
          {isRevealed ? 'Masquer' : 'Afficher'}
        </Button>
      </div>
    );
  }

  if (variant === 'protected') {
    return (
      <div className={`bg-accent/5 border border-accent/20 rounded-xl p-4 ${className}`}>
        <div className="flex items-center space-x-3 mb-3">
          <Shield className="h-5 w-5 text-accent" />
          <span className="font-medium text-foreground">Contact protégé</span>
        </div>
        <div 
          className="select-none cursor-pointer"
          onMouseDown={handleCopyAttempt}
        >
          <div className="flex items-center space-x-2">
            {type === 'email' ? <Mail className="h-4 w-4 text-accent" /> : <Phone className="h-4 w-4 text-accent" />}
            {type === 'email' ? formatSplitEmail(email) : formatSplitPhone(phone)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          🔒 Coordonnées protégées contre le scraping automatisé
        </p>
      </div>
    );
  }

  // Default: split variant
  return (
    <div className={`${className}`}>
      <div 
        className="select-none"
        onMouseDown={handleCopyAttempt}
      >
        {type === 'email' ? formatSplitEmail(email) : formatSplitPhone(phone)}
      </div>
    </div>
  );
};

export default ProtectedContact;