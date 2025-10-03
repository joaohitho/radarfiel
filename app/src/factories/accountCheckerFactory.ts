import { AppIdentifier, IAccountChecker } from '../services/types';
import { TinderAccountService } from '../services/TinderAccountService';
import { BumbleAccountService } from '../services/BumbleAccountService';
import { BadooAccountService } from '../services/BadooAccountService';
import { EdenAccountService } from '../services/EdenAccountService';
import { SaltAccountService } from '../services/SaltAccountService';
import { QuimicaCristaAccountService } from '../services/QuimicaCristaAccountService';

export type AppOption = {
  id: AppIdentifier;
  translationKey: string;
  gradient: [string, string];
};

export const APP_OPTIONS: AppOption[] = [
  { id: 'tinder', translationKey: 'apps.tinder', gradient: ['#FF416C', '#FF4B2B'] },
  { id: 'bumble', translationKey: 'apps.bumble', gradient: ['#F6F6F7', '#FF416C'] },
  { id: 'badoo', translationKey: 'apps.badoo', gradient: ['#FF4B2B', '#0B0F1A'] },
  { id: 'eden', translationKey: 'apps.eden', gradient: ['#F6F6F7', '#FF416C'] },
  { id: 'salt', translationKey: 'apps.salt', gradient: ['#FF416C', '#F6F6F7'] },
  { id: 'quimicaCrista', translationKey: 'apps.quimicaCrista', gradient: ['#F6F6F7', '#0B0F1A'] }
];

export const createAccountChecker = (app: AppIdentifier): IAccountChecker => {
  switch (app) {
    case 'tinder':
      return new TinderAccountService();
    case 'bumble':
      return new BumbleAccountService();
    case 'badoo':
      return new BadooAccountService();
    case 'eden':
      return new EdenAccountService();
    case 'salt':
      return new SaltAccountService();
    case 'quimicaCrista':
      return new QuimicaCristaAccountService();
    default:
      throw new Error(`Checker not implemented for app: ${app}`);
  }
};
