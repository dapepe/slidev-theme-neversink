---
theme: ../
company: difo
color: dark
layout: cover
title: Microsoft Solution Workshop
subtitle: Gemeinsame Strategie und Roadmap
date: 30.09.2025
version: 1.0
logos:
  - '/difo/images/difo-logo_bright-solid.svg'
  - '/bell/difo-logo_bell-bright.svg'
  - '/cms-it/difo-logo_cms-it-bright.svg'
logoSize: medium
backgroundImage: /difo/images/space.png
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /difo/images/PETER.png

---

---
layout: cards-grid
color: dark
cards:
  - headline: "Vereinheitlichung"
    content: "Zusammenarbeit über Unternehmensgrenzen hinweg ermöglichen"
    icon: "fas fa-network-wired"
    color: "#3b82f6" # Blau für Vernetzung
  - headline: "Optimierung"
    content: "Reduzierung der Arbeitslast in der internen Administration"
    icon: "fas fa-cogs"
    color: "#10b981" # Grün für Effizienz
  - headline: "Enablement"
    content: "Zugewinn neuer Funktionen und Möglichkeiten"
    icon: "fas fa-lightbulb"
    color: "#facc15" # Gelb für Innovation/Ideen
theme: "dark"
sequential: true
---

# ZIELE
## Was wollen wir erreichen?

---
layout: cards-grid
color: light
cards:
  - headline: "Active Directory"
    content: "Aktuell per ACMP bei CMS"
    icon: "fas fa-network-wired"
    color: "#424d90"
  - headline: "Tenants"
    content: "Zusammenlegen der Tenants auf einen einheitlichen DiFo-Tenant"
    icon: "fas fa-layer-group"
    color: "#424d90"
  - headline: "E-Mail"
    content: "Einheitliches Management, Archivierung, SPAM-Handling"
    icon: "fas fa-envelope"
    color: "#424d90"
  - headline: "Teams"
    content: "Mitarbeiter sollen horizontal miteinander Zusammenarbeiten können"
    icon: "fas fa-users"
    color: "#424d90"
  - headline: "Lizenzierung"
    content: "Welche Lizenzen gibt es bzw werden benötigt? Autom. Zuweisung nach Gruppe"
    icon: "fas fa-id-card"
    color: "#424d90"
  - headline: "Dateiverwaltung"
    content: "Ablage und Sharing via OneDrive, Sharepoint, o.ä."
    icon: "fas fa-folder"
    color: "#424d90"
theme: "light"
sequential: false
---

# THEMEN (1/2)

---
layout: cards-grid
color: light
cards:
  - headline: "Softwareverteilung"
    content: "Aktuell per ACMP bei CMS"
    icon: "fas fa-download"
    color: "#424d90"
  - headline: "MDM"
    content: "Werkzeuge zur Device Verwaltung"
    icon: "fas fa-mobile-alt"
    color: "#424d90"
  - headline: "Compliance"
    content: "Berücksichtigung von Compliance und Gov-Requirements"
    icon: "fas fa-balance-scale"
    color: "#424d90"
theme: "light"
sequential: false
---

# THEMEN (2/2)

---
layout: two-cols-full
title: Test
color: light
columns: is-7-5
---

:: left ::

# Active Directory
## Status Quo

Welche Services on Prem benötigen ein lokales Active Directory?

- **Client-Zertifikate** → PKI in der Entra Cloud
- **NAC** → Klärung ob Extreme Controller mit Entra kompatibel ist
- **LDAP** → Entra Domain Services per VPN
- **SAML** → Kann in die cloud gezogen werden (Wiki, VMware, etc.)

:: right ::

<img src="/share/Depositphotos_782662076_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-7-5
---

:: left ::

# Active Directory
## Umsetzung

* Eigener "DiFo" Tenant als "Cloud only" variante
* Ziel ist es, insgesamt auf "Cloud only" zu gehen und die zuvor genannten Dienste schnellstmöglich zu migrieren ("Cloud only" bezieht sich hierbei nur auf MS Komponenten)
* Tenant Switch = "Big Bang"
* Abgleich GPO ↔ Intune Policy: Umstellung als Basis für Cloud-only Clients
* Migrationszeitraum: 7 Tage
* Welche Daten müssen migriert werden:
  - E-Mails
  - Teams Channels und Nachrichten
  - Sharepoint

:: right ::

<img src="/share/Depositphotos_109208416_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-7-5
---

:: left ::

# Active Directory
## Zeitlicher Ablauf (Hybrid)

* DiFo-Tenant mit zwei Nutzern und Admin-Account (mlaercher) anlegen
  * Bei Bell: UPN und Mailadressen angleichen
  * Bei CMS: Verbleibende CMS Mailboxen migrieren (nur 5 user)
* Entra Connect Server muss bei Bell und CMS lokal eingerichtet werden (ggf. Windows Upgrade) und mit EntraID verbunden werden
* Quest-Lizenz besorgen und einrichten
* Damit wären dann CMS und Bell auf einem gemeinsamen Tenant (gemeinsame Teams-Nutzung!)

:: right ::

<img src="/share/Depositphotos_109208416_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# File Share
## Lokal

* Langlebig
* Mit Backup und Snapshots
* Wird nicht indexiert
  
:: right ::

# SharePoint
## bzw. OneDrive über Teams Teams

* Kurzlebig
* Indexiert und Durchsuchbar
* Teams Teams werden irgendwann komplett archiviert (Channels können nicht archiviert werden)
* Archive Storage kosten weniger pro GB
* Löschen und Archivierung kann automatisiert werden
* Jedes Team erhält autom. eine eigene Mail Adresse basierend auf dem Teams Namen

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# PowerAutomate
## Automatisierungen und Workflows

* Anlegen von neuen Teams per Formular
* Automatisches Archivieren von Teams
* Beantragung neuer Mailboxen
* Onboarding und Offboarding

:: right ::

<img src="/share/Depositphotos_728687632_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Softwareverteilung & MDM

* Nutzung von Intune und Autopilot
  * Per Device-Lizenz ist zusätzlich möglich
  * "5+5+5"-Regel (jeder Nutzer kann bis zu 15 Geräte über Intune nutzen)
* Intune ist in der Business Premium installiert
* Intune kann auch Softwareverteilung, ACMP wäre damit nicht mehr notwendig
* Es kann u.a. definiert werden, welche Apps automatisch auf Endgeräten installiert werden sollen
* Apple Business Manager Zugang (ABM) beantragen, z.B. um Apps für Benutzer zu kaufen
* "Selbsterklärend", keine weitere Schulung notwendig

:: right ::

<img src="/share/Depositphotos_169323538_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6 
---

:: left ::

# Automatisierung

* Automatisierung per MS Forms und PowerAutomate
* Workflows zum Anlegen von Postfächern, Nutzern, etc.
* Anlegen von Teams (z.B. für Projekte, Vertriebsthemen, etc.)
* Mind. eine Lizenz notwendig (für den Admin)

:: right ::

<img src="/share/Depositphotos_56542659_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Mailboxen

* ProofPoint und FortiGate muss an sich nicht mehr verlängert werden
  - Läuft zum 30.06.2026 aus
* Awareness Training u.a. wäre in Business Premium beinhaltet
* Archiviung über Purview

:: right ::

<img src="/share/Depositphotos_777764732_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Compliance

* Nutzung von Microsoft Cloud im Rahmen von Gov Customeres
* Geräte können remote über intune gelöscht werden
* Es können div. Richtlinien definiert werden, z.B. dass Mails nur per Outlook mit FaceID genutzt werden

:: right ::

<img src="/share/Depositphotos_189020442_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Lizenzierung
## Features und Funktionen

* Siehe: [m365maps.com](https://m365maps.com)
* Lizenzen können gemischt werden
  * Zuweisung nach Rollen
* Benötigte Lizenzen
  - Alle Nutzer: "Microsoft 365 Business Premium"
  - Für Admins: "EntraID P2" (Rollenzuweisung, etc.)
  - Zusatzlizenz für PowerAutomate
* MS Planner / Projects: TBD

:: right ::

<img src="/share/Depositphotos_634424958_XL.jpg" class="h-full w-full object-cover" alt="" />


---
layout: default
color: dark
---

# Nächste Schritte

<Timeline
  :items="[
    { year: 'KW40', label: 'DiFo Tenant', description: 'Eigener Tenant für DiFo mit eigenem Nutzer' },
    { year: 'KW41', label: 'Prep', description: 'Interne Voraussetzungen (Mailboxen), Entra Conenct' },
    { year: 'KW43', label: 'Migration', description: 'Migration von Mailboxen, Teams-Chats, etc. per Quest' },
    { year: 'KW43', label: 'Post-Migration', description: 'Schulung bzw. Begleitung der Konfiguration (Intune, etc.)' },
    { year: 'KW44', label: 'Automatisierung', description: 'Einrichtung von PowerAutomate Workflows für Teams' }
  ]"
  :default-active="0"
  :sequential=true
/>

---
layout: thank-you
color: dark
logos:
  - '/difo/images/difo-logo_bright-solid.svg'
  - '/cms-it/difo-logo_cms-it-bright.svg'
  - '/bell/difo-logo_bell-bright.svg'
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /difo/images/PETER.png
disclaimer: 'Dieses Dokument enthält vertrauliche Informationen. Ohne schriftliche Genehmigung der Digital Foundations GmbH dürfen Sie diese nicht kopieren, verändern, weitergeben.'
---
