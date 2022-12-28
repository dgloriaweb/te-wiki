# API
The API is using Laravel 9 backend (REST API). It returns a JSON object.

**Status codes**: 

**Authentication**:
The API bearer token must be sent in the headers in order to access the API. 


## GET Jobs by id
URL:  ```GET /jobs/{$id}```

### parameters
job id (integer)

### response
```
{
  id: integer,
  job_name: string,
  workplace: (0 or 1),
  remote: (0 or 1),
  workdays: (0 or 1),
  saturday: (0 or 1),
  sunday: (0 or 1),
  bank_holidays: (0 or 1),
  sat_sun_bh_only: (0 or 1),
  normal_hours: (0 or 1),
  nightshift: (0 or 1),
  nightshift_only: (0 or 1),
  other_shift: (0 or 1),
  other_shift_only: (0 or 1),
  overtime: (0 or 1),
  keywords: string,
  similar_jobs: string,
  created_at: timestamp,
  updated_at: timestamp,
  similar_jobitems: array
}
```