import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary-foreground hover:bg-primary-light/30 hover:text-accent-gold transition-all duration-300 border border-primary-light/20 backdrop-blur-sm"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="mr-1">{currentLang?.flag}</span>
          <span className="mr-1 font-medium">{currentLang?.name}</span>
          <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-card/95 backdrop-blur-xl border border-border/50 shadow-elegant animate-scale-in"
        sideOffset={8}
      >
        {availableLanguages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={`cursor-pointer transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
              currentLanguage === language.code 
                ? 'bg-primary/20 text-primary font-medium' 
                : 'text-muted-foreground'
            }`}
          >
            <span className="mr-3 text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
            {currentLanguage === language.code && (
              <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;