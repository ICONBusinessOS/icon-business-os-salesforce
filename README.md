# ICON BusinessOS — Salesforce Integration

> Operations intelligence for Salesforce CRM. Monitor pipeline health, revenue trends, and data quality from within the ICON BusinessOS platform.

## Features

- **Pipeline Health Score**: composite score across opportunities, win rate, and stage velocity
- **Revenue Intelligence**: MRR trends, churn risk indicators, expansion signals
- **Data Quality Monitor**: missing fields, duplicate accounts, stale opportunity detection
- **Activity Analytics**: rep engagement, meeting frequency, email response rates

## Components

### Lightning Web Component
`iconOpsIntelligence` — embeddable dashboard card showing:
- Pipeline health score
- Win rate with trend indicator
- Data quality grade

Supports Lightning App Pages, Record Pages, and Home Pages.

### Apex Controller
`IconOpsController` — server-side data aggregation for pipeline metrics.

## Salesforce Setup

1. Create Connected App in Salesforce Setup
2. OAuth 2.0 scopes: `api`, `refresh_token`, `openid`
3. Callback URL: `https://os.theicon.ai/api/oauth/salesforce/callback`
4. Deploy LWC via SFDX or Metadata API
5. Add component to desired Lightning pages

## Requirements
- Salesforce Enterprise Edition or higher
- API access enabled
- Lightning Experience

## License
MIT
