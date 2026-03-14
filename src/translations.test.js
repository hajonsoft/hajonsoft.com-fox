/**
 * Translation coverage tests.
 * Ensures all language files contain the same keys as the English (en.json) base.
 */
import en from './lang/en.json';
import ar from './lang/ar.json';
import de from './lang/de.json';
import fr from './lang/fr.json';
import hi from './lang/hi.json';
import it from './lang/it.json';
import ja from './lang/ja.json';
import ms from './lang/ms.json';
import ru from './lang/ru.json';
import th from './lang/th.json';
import tr from './lang/tr.json';
import zh from './lang/zh.json';

const languages = { ar, de, fr, hi, it, ja, ms, ru, th, tr, zh };
const enKeys = Object.keys(en);

describe('Translation coverage', () => {
  test.each(Object.entries(languages))(
    '%s has no missing translation keys compared to en.json',
    (lang, messages) => {
      const missingKeys = enKeys.filter((key) => !(key in messages));
      expect(missingKeys).toEqual([]);
    }
  );

  test.each(Object.entries(languages))(
    '%s has no extra keys not present in en.json',
    (lang, messages) => {
      const extraKeys = Object.keys(messages).filter((key) => !(key in en));
      expect(extraKeys).toEqual([]);
    }
  );
});

describe('en.json AI Agent copy', () => {
  test('feature titles mention AI Agent', () => {
    expect(en['features.masar-umrah']).toContain('AI Agent');
    expect(en['features.masar-hajj']).toContain('AI Agent');
    expect(en['features.visit-visa']).toContain('AI Agent');
    expect(en['features.much-more']).toContain('AI Agent');
    expect(en['features.ehaj-integration']).toContain('AI Agent');
  });

  test('hero section mentions AI Agent', () => {
    expect(en['get-started.more-than-software']).toContain('AI Agent');
    expect(en['get-started.we-are-team']).toContain('AI Agent');
  });

  test('contains required new i18n keys', () => {
    const requiredKeys = [
      'why.title', 'why.subtitle',
      'why.reason1.title', 'why.reason1.description',
      'why.reason2.title', 'why.reason2.description',
      'why.reason3.title', 'why.reason3.description',
      'why.reason4.title', 'why.reason4.description',
      'demo.title', 'demo.description', 'demo.watch-demo', 'demo.try-free',
      'footer.tagline', 'footer.description', 'footer.privacy-terms', 'footer.meet-now',
      'ticker.default', 'getstarted.meet-now', 'pricing.get-a-quote',
    ];
    requiredKeys.forEach((key) => {
      expect(en[key]).toBeDefined();
      expect(en[key].length).toBeGreaterThan(0);
    });
  });
});

describe('ar.json Arabic numerals', () => {
  test('uses Arabic-Indic numerals in telephone number', () => {
    // Arabic-Indic numerals: ٠١٢٣٤٥٦٧٨٩ (U+0660 - U+0669)
    const arabicNumeralRegex = /[\u0660-\u0669]/;
    expect(ar['header.telephone']).toMatch(arabicNumeralRegex);
  });

  test('uses Arabic-Indic numerals in pricing strings', () => {
    const arabicNumeralRegex = /[\u0660-\u0669]/;
    expect(ar['pricing.100-visa-proxy']).toMatch(arabicNumeralRegex);
    expect(ar['pricing.15-support-calls']).toMatch(arabicNumeralRegex);
  });
});
