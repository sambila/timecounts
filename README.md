# Timecounts

Time Counter für Cyberspaces - Eine Web-Anwendung zur Zeiterfassung und -verwaltung für bessere Produktivität und Projektübersicht.

## ⚠️ Status

**Dieses Repository ist derzeit veraltet und wird nicht mehr aktiv gepflegt.**

Das Projekt wurde zu Lern- und Demonstrationszwecken erstellt und wird nicht mehr weiterentwickelt.

## Features

- ⏱️ Zeiterfassung für verschiedene Projekte/Aufgaben
- 📊 Übersichtliche Darstellung der erfassten Zeiten
- 💾 Lokale Datenspeicherung im Browser
- 📱 Responsive Design für alle Geräte
- 🎯 Einfache und intuitive Benutzeroberfläche

## Live Demo

Die Anwendung kann direkt über GitHub Pages aufgerufen werden:
[https://sambila.github.io/timecounts/](https://sambila.github.io/timecounts/)

## Installation & Verwendung

### Lokale Nutzung
1. Repository klonen:
```bash
git clone https://github.com/sambila/timecounts.git
```

2. In das Projektverzeichnis wechseln:
```bash
cd timecounts
```

3. `index.html` in einem Browser öffnen

### Verwendung

#### Zeiterfassung starten
1. Projekt/Aufgabe eingeben oder auswählen
2. "Start" klicken, um die Zeiterfassung zu beginnen
3. "Stop" klicken, um die Zeit zu stoppen

#### Zeiten verwalten
1. Erfasste Zeiten werden automatisch gespeichert
2. Übersicht aller Zeiteinträge einsehen
3. Bei Bedarf Einträge bearbeiten oder löschen

## Technologien

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS mit responsivem Design
- **Datenspeicherung:** Browser LocalStorage
- **Architektur:** Client-Side Single Page Application

## Projektstruktur

```
timecounts/
├── index.html          # Startseite
├── count.html          # Hauptanwendung
├── js/                 # JavaScript-Dateien
│   └── [JS-Module]
├── styles/             # CSS-Stylesheets
│   └── [Stylesheets]
├── LICENSE             # Apache 2.0 Lizenz
└── README.md          # Projektdokumentation
```

## Entwicklung

Die Anwendung ist eine reine Client-Side-Anwendung ohne Backend-Abhängigkeiten. Alle Daten werden lokal im Browser gespeichert.

### Lokaler Entwicklungsserver
```bash
# Einfacher HTTP-Server für lokale Entwicklung
python -m http.server 8000
# oder
npx serve .
```

## Bekannte Probleme

- Daten sind nur lokal im Browser gespeichert
- Keine Synchronisation zwischen Geräten
- Möglicherweise veraltete Abhängigkeiten
- Keine Backup-Funktionalität

## Roadmap (Archiviert)

- ✅ Grundlegende Zeiterfassung
- ✅ Lokale Datenspeicherung
- ✅ Responsive Design
- ❌ Export-Funktionen (nicht implementiert)
- ❌ Team-Kollaboration (nicht implementiert)
- ❌ Cloud-Synchronisation (nicht implementiert)

## Mitwirken

Da dieses Projekt archiviert ist, werden keine neuen Beiträge mehr angenommen.

## Lizenz

Dieses Projekt steht unter der Apache 2.0 Lizenz. Details finden Sie in der [LICENSE](LICENSE) Datei.

## Danksagungen

Danke an alle, die zu diesem Projekt beigetragen haben, als es noch aktiv entwickelt wurde.

## Kontakt

Bei Fragen können Sie mich über GitHub erreichen: [@sambila](https://github.com/sambila)

---

*Erstellt: Dezember 2024*  
*Status: Archiviert/Nicht mehr gepflegt*  
*Letztes funktionsfähiges Update: Dezember 2024*