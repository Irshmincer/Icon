export interface LoginDetailsPage {
  user: User;
  org: Org;
  token: string;
}

export interface Org {
  id: number;
  name: string;
  organization_roles: Organizationrole[];
  organization_capabilities: Organizationrole[];
  application_hostname?: any;
  super_organization?: any;
  sub_organization: boolean;
  settings: Setting[];
  pricing_rule_set?: any;
  delivery_rule_sets: Deliveryruleset[];
  delivery_capabilities: any[];
  is_super_organization: boolean;
}

export interface Deliveryruleset {
  group: string;
  id: string;
  name: string;
}

export interface Setting {
  description: string;
  id: string;
  enabled: boolean;
}

export interface Organizationrole {
  name: string;
}

export interface User {
  id: number;
  admin: boolean;
  full_name: string;
  last_login: string;
  name: string;
  status: string;
  role: string;
  read_only: boolean;
}
