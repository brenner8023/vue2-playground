export type DropdownItem = DropdownItemWithLink | DropdownItemWithChildren;

export interface DropdownItemWithLink {
  label: string;
  key: string | number[];
}

export interface DropdownItemWithChildren {
  label: string;
  items: DropdownItemChild[];
}

export type DropdownItemChild =
  | DropdownItemWithLink
  | MenuItemChildWithChildren;

export interface MenuItemChildWithChildren {
  label?: string;
  items: DropdownItemWithLink[];
}
