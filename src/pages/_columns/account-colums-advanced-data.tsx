import { ColumnDef } from '@tanstack/react-table'

import { Account } from '@/@types/account'
import { Checkbox } from '@/components/ui/checkbox'

export const accountColumnsAdvanced: ColumnDef<Account>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'document',
    header: 'Document',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    id: 'actions',
    cell: () => {
      // TODO: Actions Dropdown

      return '...'
    },
  },
]
