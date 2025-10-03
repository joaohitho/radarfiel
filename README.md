# RadarFiel

RadarFiel é um aplicativo mobile multiplataforma (Android/iOS) construído com React Native, Expo e TypeScript para verificar se perfis estão ativos em aplicativos de namoro populares.

## Tecnologias principais

- React Native + Expo (TypeScript)
- Zustand para gerenciamento de estado com persistência em AsyncStorage
- NativeWind (Tailwind) para estilização
- Lottie para animações (onboarding, loading, feedback)
- Arquitetura modular seguindo princípios SOLID com factories e services dedicados
- Internacionalização (i18n) com suporte PT-BR e EN-US

## Estrutura do projeto

```
app/
  App.tsx
  app.json
  package.json
  src/
    assets/lottie
    components
    factories
    hooks
    screens
    services
    stores
    utils
backend/
docs/
```

## Pré-requisitos

- Node.js 18 ou superior (recomendado usar `nvm use 18`)
- npm 9+ ou pnpm/yarn compatíveis
- Conta Expo (opcional para builds EAS)

## Como executar localmente

1. Instale as dependências do projeto Expo:

   ```bash
   cd app
   npm install
   ```

2. Inicie o projeto Expo:

   ```bash
   npm run start
   ```

3. Escaneie o QR Code com o aplicativo Expo Go (Android/iOS) ou use um emulador (`npm run android` / `npm run ios`).

Se encontrar problemas ao instalar dependências, verifique a versão do Node e limpe o cache do npm (`npm cache clean --force`) antes de tentar novamente.

## Builds com Expo EAS

1. Configure o EAS CLI conforme a [documentação oficial](https://docs.expo.dev/eas/).
2. Rode um build para Android ou iOS:

   ```bash
   eas build --platform android
   eas build --platform ios
   ```

## Mock de backend

O app utiliza `src/utils/mockBackend.ts` para simular uma API que retorna status de contas. Este mock pode ser substituído futuramente por integrações com APIs oficiais ou funções serverless. A especificação OpenAPI do mock está disponível em `docs/openapi.yaml`.

## Internacionalização

O idioma é detectado automaticamente via `expo-localization`, com fallback para PT-BR. Strings principais estão localizadas em `src/utils/i18n.ts`.

## Acessibilidade e responsividade

- Layout escuro (#0B0F1A) com contraste adequado
- Componentes possuem `accessibilityRole` quando necessário
- Botões e cards com área mínima de toque ≥ 48px

## Futuras melhorias

- Integração com serviços reais de verificação
- Autenticação e perfis de usuário
- Notificações push para alertas em tempo real
