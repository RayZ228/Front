export interface RowItem {
  key: number;
  label: string;
  desc: string;
  created: Date;
  group: string;
}

const groups = ["Home", "Office", "Trip", "Shop", "Gym"];

export function buildRows(amount: number): RowItem[] {
  const out: RowItem[] = [];
  for (let i = 0; i < amount; i++) {
    out.push({
      key: i,
      label: `Row ${i + 1}`,
      desc: `Details for row number ${i + 1}. Sample text for virtualization test.`,
      created: new Date(Date.now() - Math.random() * 10000000000),
      group: groups[Math.floor(Math.random() * groups.length)],
    });
  }
  return out;
}