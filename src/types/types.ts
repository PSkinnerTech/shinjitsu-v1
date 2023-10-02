interface TextComparisonField {
  value: string
  op: '=' | '!=' | 'like' | 'not like'
}

interface NumberComparisonField {
  value: number
  op: '=' | '!=' | '>' | '<' | '>=' | '<='
}

interface IdentityFields {
  identity_id?: TextComparisonField
  creator?: TextComparisonField
  display_name?: TextComparisonField
  description?: TextComparisonField
  created_at?: NumberComparisonField
  last_active?: NumberComparisonField
}

interface ClaimFields {
  in_claim?: {
    as_subject?: {
      where_predicate?: IdentityFields
      where_object?: IdentityFields
    }
    as_predicate?: {
      where_subject?: IdentityFields
      where_object?: IdentityFields
    }
    as_object?: {
      where_subject?: IdentityFields
      where_predicate?: IdentityFields
    }
  }
}

export interface IdentityQueryBody {
  input: IdentityFields & ClaimFields
  options: {
    pagination: { size: number; page: number }
    orderBy: { field: string; direction: 'desc' | 'asc' }
  }
}
