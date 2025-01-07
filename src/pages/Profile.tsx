{/* Previous imports stay the same */}

export default function Profile() {
  {/* Previous state and other functions stay the same */}

  const handleEmailChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailForm.newEmail !== emailForm.confirmEmail) {
      toast({
        title: "Erro",
        description: "Os e-mails não coincidem",
        variant: "destructive",
      });
      return;
    }
    setShowEmailChange(false);
    toast({
      title: "E-mail atualizado",
      description: "Seu e-mail foi alterado com sucesso.",
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }
    setShowPasswordChange(false);
    toast({
      title: "Senha atualizada",
      description: "Sua senha foi alterada com sucesso.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Editar Perfil</h1>
      
      <div className="mb-8 relative w-fit mx-auto">
        <Avatar className="h-32 w-32">
          <AvatarImage src={user.avatar} alt={user.firstName} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nome</Label>
            <Input
              id="firstName"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input
              id="lastName"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Cargo</Label>
            <Input
              id="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            value={user.email}
            disabled
          />
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setShowEmailChange(!showEmailChange)}
          >
            {showEmailChange ? "Cancelar alteração" : "alterar e-mail"}
          </button>
          
          {showEmailChange && (
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>E-mail Atual</Label>
                <Input
                  type="email"
                  value={emailForm.currentEmail}
                  onChange={(e) => setEmailForm({ ...emailForm, currentEmail: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <div className="space-y-2">
                <Label>Novo E-mail</Label>
                <Input
                  type="email"
                  value={emailForm.newEmail}
                  onChange={(e) => setEmailForm({ ...emailForm, newEmail: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <div className="space-y-2">
                <Label>Confirme o Novo E-mail</Label>
                <Input
                  type="email"
                  value={emailForm.confirmEmail}
                  onChange={(e) => setEmailForm({ ...emailForm, confirmEmail: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <Button onClick={handleEmailChange} className="w-full">Alterar E-mail</Button>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            value="********"
            disabled
          />
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setShowPasswordChange(!showPasswordChange)}
          >
            {showPasswordChange ? "Cancelar alteração" : "alterar senha"}
          </button>
          
          {showPasswordChange && (
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Senha Atual</Label>
                <Input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <div className="space-y-2">
                <Label>Nova Senha</Label>
                <Input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <div className="space-y-2">
                <Label>Confirme a Nova Senha</Label>
                <Input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
              <Button onClick={handlePasswordChange} className="w-full">Alterar Senha</Button>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button type="button" variant="outline" onClick={() => navigate('/')}>
            Cancelar
          </Button>
          <Button type="submit">
            Salvar Alterações
          </Button>
        </div>
      </form>
    </div>
  );
}