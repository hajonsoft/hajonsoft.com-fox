import {
  detectPreferredLanguageSync,
  normalizeLanguage,
} from "./detectPreferredLanguage";

describe("normalizeLanguage", () => {
  test("maps common aliases and region tags", () => {
    expect(normalizeLanguage("en-US")).toBe("en");
    expect(normalizeLanguage("ar-SA")).toBe("ar");
    expect(normalizeLanguage("zh-CN")).toBe("zh");
    expect(normalizeLanguage("zh-Hant")).toBe("zh");
    expect(normalizeLanguage("id")).toBe("ms");
    expect(normalizeLanguage("pt-BR")).toBe("en");
    expect(normalizeLanguage("xx")).toBeNull();
  });
});

describe("detectPreferredLanguageSync", () => {
  const originalLanguages = navigator.languages;
  const originalLanguage = navigator.language;

  afterEach(() => {
    Object.defineProperty(navigator, "languages", {
      configurable: true,
      get: () => originalLanguages,
    });
    Object.defineProperty(navigator, "language", {
      configurable: true,
      get: () => originalLanguage,
    });
    localStorage.removeItem("langOverride");
  });

  test("honors manual langOverride", () => {
    localStorage.setItem("langOverride", "fr");
    expect(detectPreferredLanguageSync()).toBe("fr");
  });

  test("uses first supported browser language", () => {
    Object.defineProperty(navigator, "languages", {
      configurable: true,
      get: () => ["de-DE", "en"],
    });
    Object.defineProperty(navigator, "language", {
      configurable: true,
      get: () => "de-DE",
    });
    expect(detectPreferredLanguageSync()).toBe("de");
  });

  test("prefers Arabic when bilingual list is en then ar", () => {
    Object.defineProperty(navigator, "languages", {
      configurable: true,
      get: () => ["en-US", "ar"],
    });
    Object.defineProperty(navigator, "language", {
      configurable: true,
      get: () => "en-US",
    });
    expect(detectPreferredLanguageSync()).toBe("ar");
  });
});
