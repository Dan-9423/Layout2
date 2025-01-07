import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface Country {
  name: string;
  code: string;
  format: string;
}

const countries: Country[] = [
  { name: 'Brasil', code: '+55', format: '(00) 00000-0000' },
  { name: 'Estados Unidos', code: '+1', format: '(000) 000-0000' },
  { name: 'Portugal', code: '+351', format: '000 000 000' },
  { name: 'Reino Unido', code: '+44', format: '00000 000000' },
];

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(11) 98765-4321',
    role: 'Administrator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const [editedUser, setEditedUser] = useState(user);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [emailForm, setEmailForm] = useState({
    currentEmail: '',
    newEmail: '',
    confirmEmail: ''
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // ... rest of the existing handlers ...

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg">
      {/* ... rest of the existing JSX until phone input ... */}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[120px] flex justify-between items-center">
                  {selectedCountry.code}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <span>{country.name} ({country.code})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Input
              id="phone"
              value={isEditing ? editedUser.phone : user.phone}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              disabled={!isEditing}
              placeholder={selectedCountry.format}
              className="flex-1"
            />
          </div>
        </div>
        {/* ... rest of the existing JSX ... */}
      </div>

      {/* ... rest of the component ... */}
    </div>
  );
}