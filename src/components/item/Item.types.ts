export type PropTypes = {
    "data-testid"?: string;
    id: string,
    absIndex: number;
    label: string;
    onClick: (id: number, isRemove: boolean) => void
    clicked?: boolean;
    equipment: string;
}