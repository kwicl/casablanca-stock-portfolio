import type { StockMeta } from './types';

/**
 * Univers des valeurs suivies — Bourse de Casablanca.
 *
 * Prix de référence : clôtures officielles de la séance du vendredi
 * 02/10/2026 (sources : Bourse de Casablanca, Yuna, LeBoursier/Medias24,
 * BMCE Capital Bourse, Investing.com). Ils servent de base au moteur de
 * démonstration et seront écrasés par le flux réel dès qu'un provider
 * "live" est branché.
 */
export const STOCK_UNIVERSE: StockMeta[] = [
  {
    symbol: 'IAM',
    ticker: 'IAM',
    name: 'Maroc Telecom (Ittissalat Al-Maghrib)',
    sector: 'Télécommunications',
    isin: 'MA0000011488',
    referencePrice: 92.5,
    volatility: 0.0009,
    avgVolume: 25000,
  },
  {
    symbol: 'TGCC',
    ticker: 'TGC',
    name: 'TGCC S.A',
    sector: 'Bâtiment & matériaux de construction',
    isin: 'MA0000012528',
    referencePrice: 649.0,
    volatility: 0.0016,
    avgVolume: 5500,
  },
  {
    symbol: 'SGTM',
    ticker: 'GTM',
    name: 'SGTM — Société Générale des Travaux du Maroc',
    sector: 'Bâtiment & matériaux de construction',
    isin: 'MA0000012783',
    referencePrice: 600.0,
    volatility: 0.0018,
    avgVolume: 9000,
  },
  {
    symbol: 'RISMA',
    ticker: 'RIS',
    name: 'Risma Hôtellerie & Tourisme',
    sector: 'Loisirs & hôtellerie',
    isin: 'MA0000011462',
    referencePrice: 301.0,
    volatility: 0.0012,
    avgVolume: 3000,
  },
  {
    symbol: 'CIH',
    ticker: 'CIH',
    name: 'CIH Bank (Crédit Immobilier et Hôtelier)',
    sector: 'Banques',
    isin: 'MA0000011454',
    referencePrice: 314.0,
    volatility: 0.0011,
    avgVolume: 12000,
  },
];

export const STOCK_BY_SYMBOL: Record<string, StockMeta> = Object.fromEntries(
  STOCK_UNIVERSE.map((s) => [s.symbol, s]),
);

/** Indice MASI au 02/10/2026 (affiché en bandeau, à titre indicatif) */
export const MASI_REFERENCE = 17303.69;

/** Date des clôtures de référence (affichée dans l'interface) */
export const REFERENCE_DATE = '02/10/2026';
