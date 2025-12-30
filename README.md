# Khulasah+

An open-source Progressive Web App for the Cream of Remembrance (Khulasah), a Ba'Alawi tariqa compiled collection of daily adhkar (remembrances) and awrad (litanies).

## Developer

```bash
bun install
bun run dev
bun run build:prod
```

---

This project was bootstrapped from [PWABuilder's pwa-starter](https://docs.pwabuilder.com/#/starter/quick-start).

### Requirements

- [Bun](https://bun.sh)
- [Pre-commit](https://pre-commit.com)

### Project Structure

- `src/content/` -  adhkar, awrad, qasaid, etc.
- `src/content/shared/` - Shared references (Quranic references taken from Hafs published by the [King Fahd Complex for the Printing of the Holy Qur'an](https://qurancomplex.gov.sa/))
- `src/pages/` - Page components and routing configuration
- `scripts/` - Build and content processing scripts
