export interface assetResult {
  id: number;
  isrc?: any;
  type: string;
  name: string;
  display_artist?: any;
  asset_version: string;
  asset_catalog_tier: string;
  p_line_year?: any;
  p_line_text?: any;
  preview_start: number;
  preview_length: number;
  language: string;
  lyrics?: any;
  audio_locale?: any;
  genre?: any;
  subgenre?: any;
  alternate_genre?: any;
  alternate_subgenre?: any;
  artists: any[];
  volume: number;
  sequence?: any;
  available_separately: boolean;
  allow_preorder: boolean;
  allow_preorder_preview: boolean;
  preorder_type: string;
  duration: number;
  audio: Audio;
  original_encodings: any[];
  required_fields: any[];
  rights_claim: string;
  parental_advisory: boolean;
  recording_year?: any;
  recording_location?: any;
  rights_holder_name?: any;
  country_of_recording?: any;
  country_of_comissioning?: any;
  rights_ownership_name?: any;
  rights_contract_begin_date?: any;
  contributors: any[];
  publishers: any[];
  organization: Organization;
  created_date: string;
  modified_date: string;
  tags: any[];
  video_hd: boolean;
  video: Video;
  video_preview_image: Video;
  products_count: number;
  extra_1?: any;
  extra_2?: any;
  extra_3?: any;
  extra_4?: any;
  extra_5?: any;
  extra_6?: any;
  extra_7?: any;
  extra_8?: any;
  extra_9?: any;
  extra_10?: any;
  asset_state: string;
  mfit_email_address?: any;
  actions: string[];
  missing_fields: Missingfields;
  parental_advisory_next: string;
}

export interface Missingfields {
  submit: any[];
  publish: any[];
}

export interface Video {
  has_uploaded: boolean;
}

export interface Organization {
  id: number;
  name: string;
}

export interface Audio {
  id: number;
  original_filename?: any;
  vault_hook?: any;
  created_date: string;
  modified_date: string;
  has_uploaded: boolean;
  bit_depth?: any;
  duration: number;
  file_size?: any;
  mime_type?: any;
  number_of_channels?: any;
  sampling_rate?: any;
}





export interface AssetListPage {
  page: number;
  page_size: number;
  total: number;
  asset: assetResult[];
}

