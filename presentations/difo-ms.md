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
## Was wollen wir erreichen

---
layout: cards-grid
color: light
cards:
  - headline: "Tenants"
    content: "Zusammenlegen der Tenants auf einen einheitlichen DiFo-Tenant; Gleichzeitig muss eine Trennung möglich sein."
    icon: "fas fa-network-wired"
    color: "#424d90"
  - headline: "Mailboxen"
    content: "Jeder Mitarbeiter hat eine difo.de sowie eine cms-it.de und/oder bell.de Adresse"
    icon: "fas fa-envelope"
    color: "#424d90"
  - headline: "Kalender"
    content: "Gemeinsame Kalender auf Difo-Ebene"
    icon: "fas fa-calendar-alt"
    color: "#424d90"
  - headline: "Teams"
    content: "Mitarbeiter sollen horizontal miteinander Zusammenarbeiten können"
    icon: "fas fa-users"
    color: "#424d90"
  - headline: "Lizenzierung"
    content: "Welche Lizenzen gibt es bzw werden benötigt"
    icon: "fas fa-id-card"
    color: "#424d90"
  - headline: "MDM und Auto-Pilot"
    content: "Werkzeuge zur Device Verwaltung"
    icon: "fas fa-mobile-alt"
    color: "#424d90"
  - headline: "Compliance"
    content: "Berücksichtigung von Compliance und Gov-Requirements"
    icon: "fas fa-balance-scale"
    color: "#424d90"
  - headline: "Dateiverwaltung"
    content: "Ablage und Sharing via OneDrive, Sharepoint, o.ä."
    icon: "fas fa-file"
    color: "#424d90"
theme: "light"
sequential: false
---

# THEMEN

---
layout: two-cols-full
title: Test
color: light
columns: is-5-7
---

:: left ::

# Active Directory

- Welche Services on Prem benötigen ein lokales Active Directory
  - Client-Zertifikate für NAC
  - LDAP
  - SAML
  - File-Server
  - Windows CA
- Alternativen:
  - Entra Only
  - Hybrid Join
  - Autopilot

:: right ::

```mermaid
graph TD
  %% Hybrid Active Directory with Entra ID + Entra Domain Services (LDAP)

  subgraph On-Premises
    AD1[(Active Directory DS - DC1)]
    AD2[(Active Directory DS - DC2)]
    AADC[Azure AD Connect / Cloud Sync]
    AD1 <--> AD2
    AD1 --> AADC
    AD2 --> AADC
  end

  subgraph Azure / Microsoft Cloud
    EntraID[(Microsoft Entra ID)]
    AADDS[(Microsoft Entra Domain Services)]
    VNet[(Azure VNet / Subnet)]
    AADDS --- VNet
  end

  %% Sync & identity flows
  AADC == "User/Group/Hash Sync" ==> EntraID
  EntraID == "Managed domain provisioning" ==> AADDS

  %% App access over LDAP/LDAPS
  Apps[Legacy Apps / LDAP Clients]
  Apps == "LDAP/LDAPS, Kerberos/NTLM" ==> AADDS

  %% Connectivity
  OnPremNet[(On-Prem Network)]
  OnPremNet --- AD1
  OnPremNet --- AD2
  OnPremNet --- Apps
  OnPremNet == "VPN / ExpressRoute" ==> VNet

  %% Admins
  Admins[Admins]
  Admins -. "Portal / PowerShell / Graph" .-> EntraID
```

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Features und Funktionen

* Siehe: m365maps.com
* Power-Plattform: PowerAutomate, PowerBi

:: right ::

<img src="/share/Depositphotos_634424958_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-6-6
---

:: left ::

# Tenants

* Erstellen eines komplett neuen Tenants für difo.de
* Zentrale 

:: right ::

<img src="/share/Depositphotos_664214602_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: two-cols-full
title: Test
color: light
columns: is-7-5
---

:: left ::

# Dateiverwaltung
## Grundsätzliche Überlegungen

* Lokale File Server vs. OneDrive/Sharepoint

:: right ::

<img src="/share/Depositphotos_51675177_XL.jpg" class="h-full w-full object-cover" alt="" />

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
columns: is-7-5
---

:: left ::

# Automatisierung

* Automatisierung per MS Forms und PowerAutomate
* Workflows zum Anlegen von Postfächern, Nutzern, etc.
* Anlegen von Teams (z.B. für Projekte, Vertriebsthemen, etc.)

:: right ::

<img src="/share/Depositphotos_56542659_XL.jpg" class="h-full w-full object-cover" alt="" />

---
layout: default
---

# Notizen
## Intern

* Automatisches Labeling (z.B. per AI) per DocFlow
* Martin wg. difo.de DNS config (SPF record)
* Postfach und Konfig für meet@difo.de
* Rollout von Proofpoint auch zu Bell
* https://cmsitconsulting-admin.sharepoint.com