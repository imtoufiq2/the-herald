interface GuardianFields {
  trailText?: string;
  thumbnail?: string;
  byline?: string;
  headline?: string;
  body?: string;
}

interface GuardianTag {
  id: string;
  type: string;
  webTitle: string;
  bylineImageUrl?: string;
}

export interface GuardianItem {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  fields?: GuardianFields;
  tags?: GuardianTag[];
}

export interface GuardianSearchResponse {
  response: { status: string; total: number; results: GuardianItem[] };
}

export interface GuardianItemResponse {
  response: { status: string; content: GuardianItem };
}
