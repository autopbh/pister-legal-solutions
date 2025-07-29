import { useState } from 'react';
import { Mail, Phone, Copy, Eye, EyeOff, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from '@/hooks/useTranslations';

interface ProtectedContactProps {
  email?: string;
  phone?: string;
  type: 'email' | 'phone';
  variant?: 'split' | 'reveal' | 'protected';
  className?: string;
}

const ProtectedContact = ({ 
  email = 'kontakt@jozefpister.com', 
  phone = '',
  type,
  variant = 'split',
  className = ''
}: ProtectedContactProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslations();

  const handleCopyAttempt = () => {
    toast({
      title: t.protectedContact.toast.title,
      description: t.protectedContact.toast.description,
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
    // Ne pas afficher si c'est un téléphone
    if (type === 'phone') return null;
    
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-accent" />
          {!isRevealed ? (
            <span className="text-muted-foreground font-medium">
              {t.protectedContact.emailProtected}
            </span>
          ) : (
            <span className="font-medium">
              {email}
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
          {isRevealed ? t.protectedContact.hide : t.protectedContact.show}
        </Button>
      </div>
    );
  }

  if (variant === 'protected') {
    // Ne pas afficher si c'est un téléphone
    if (type === 'phone') return null;
    
    return (
      <div className={`bg-accent/5 border border-accent/20 rounded-xl p-4 ${className}`}>
        <div className="flex items-center space-x-3 mb-3">
          <Shield className="h-5 w-5 text-accent" />
          <span className="font-medium text-foreground">{t.protectedContact.protectedTitle}</span>
        </div>
        <div 
          className="select-none cursor-pointer"
          onMouseDown={handleCopyAttempt}
        >
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-accent" />
            {formatSplitEmail(email)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {t.protectedContact.protectedDescription}
        </p>
      </div>
    );
  }

  // Default: split variant
  // Ne pas afficher si c'est un téléphone
  if (type === 'phone') return null;
  
  return (
    <div className={`${className}`}>
      <div 
        className="select-none"
        onMouseDown={handleCopyAttempt}
      >
        {formatSplitEmail(email)}
      </div>
    </div>
  );
};

export default ProtectedContact;