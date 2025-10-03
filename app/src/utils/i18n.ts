import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  'pt-BR': {
    translation: {
      onboarding: {
        title: 'RadarFiel',
        subtitle: 'Descubra em segundos se um perfil está ativo nos principais apps de namoro.',
        cta: 'Verifique agora'
      },
      check: {
        title: 'Verificar conta',
        placeholder: 'Nome de usuário ou e-mail',
        selectLabel: 'Escolha o app',
        button: 'Verificar',
        history: 'Histórico',
        emptyError: 'Informe um usuário ou e-mail para verificar.',
        errorTitle: 'Não foi possível verificar',
        genericError: 'Tente novamente em instantes.',
        loading: 'Consultando...'
      },
      result: {
        active: 'Ativa',
        notFound: 'Não encontrada',
        title: 'Resultado',
        tryAgain: 'Nova verificação'
      },
      history: {
        title: 'Últimas verificações',
        empty: 'Nenhuma verificação até agora.',
        clear: 'Limpar histórico'
      },
      apps: {
        tinder: 'Tinder',
        bumble: 'Bumble',
        badoo: 'Badoo',
        eden: 'Eden',
        salt: 'SALT',
        quimicaCrista: 'Química Cristã'
      },
      common: {
        back: 'Voltar',
        ok: 'Ok'
      }
    }
  },
  'en-US': {
    translation: {
      onboarding: {
        title: 'RadarFiel',
        subtitle: 'Find out in seconds if a dating profile is active.',
        cta: 'Check now'
      },
      check: {
        title: 'Check account',
        placeholder: 'Username or email',
        selectLabel: 'Choose the app',
        button: 'Check',
        history: 'History',
        emptyError: 'Enter a username or email to continue.',
        errorTitle: 'Unable to verify now',
        genericError: 'Please try again in a moment.',
        loading: 'Checking...'
      },
      result: {
        active: 'Active',
        notFound: 'Not found',
        title: 'Result',
        tryAgain: 'Run another check'
      },
      history: {
        title: 'Recent checks',
        empty: 'No checks yet.',
        clear: 'Clear history'
      },
      apps: {
        tinder: 'Tinder',
        bumble: 'Bumble',
        badoo: 'Badoo',
        eden: 'Eden',
        salt: 'SALT',
        quimicaCrista: 'Christian Match'
      },
      common: {
        back: 'Back',
        ok: 'Ok'
      }
    }
  }
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: Localization.getLocales()[0]?.languageTag ?? 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  });
}

export default i18n;
