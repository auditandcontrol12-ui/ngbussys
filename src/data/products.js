export const productCategories = [
  {
    id: 'sop-control',
    title: 'SOP & Control Templates',
    shortTitle: 'SOP Templates',
    description:
      'Templates for SOPs, approvals, audit actions, inventory controls, and management discipline.',
    funnelQuestion: 'Do you need structure, governance, and control documents?',
    products: [
      {
        slug: 'warehouse-sop-starter-pack',
        name: 'Warehouse SOP Starter Pack',
        type: 'SOP Pack',
        status: 'Coming Soon',
        description:
          'A practical SOP pack for warehouse receiving, storage, picking, transfers, stock count, and dispatch controls.',
        bestFor: 'Warehouse teams, SME operations, inventory managers',
        problem:
          'Warehouse work is happening, but people rely on memory, verbal instructions, and inconsistent habits.',
        outcome:
          'Create a clear warehouse operating structure with documented steps, responsibilities, and control points.',
        included: [
          'Receiving SOP',
          'Storage SOP',
          'Picking & Dispatch SOP',
          'Stock Transfer SOP',
          'Stock Count SOP',
          'Warehouse control checklist',
        ],
      },
      {
        slug: 'inventory-count-control-pack',
        name: 'Inventory Count Control Pack',
        type: 'Control Template',
        status: 'Coming Soon',
        description:
          'Templates to plan, assign, count, verify, reconcile, and approve stock count results.',
        bestFor: 'Inventory control, warehouse audit, finance teams',
        problem:
          'Stock counts are done, but the process is not controlled, assigned, reviewed, or properly reconciled.',
        outcome:
          'Run structured stock counts with accountability, variance review, and approval evidence.',
        included: [
          'Count planning sheet',
          'Counter assignment tracker',
          'Variance review template',
          'Approval summary',
          'Recount tracker',
        ],
      },
      {
        slug: 'internal-audit-action-tracker',
        name: 'Internal Audit Action Tracker',
        type: 'Excel Template',
        status: 'Coming Soon',
        description:
          'Track audit findings, owners, deadlines, risk levels, re-audit status, and closure evidence.',
        bestFor: 'Internal audit, compliance, management teams',
        problem:
          'Audit findings are reported, but actions are not followed through with ownership and evidence.',
        outcome:
          'Turn audit findings into controlled action items with clear owners, due dates, and re-audit status.',
        included: [
          'Finding register',
          'Risk rating fields',
          'Owner and stakeholder tracker',
          'Due date tracker',
          'Evidence status',
          'Re-audit result section',
        ],
      },
      {
        slug: 'approval-matrix-template',
        name: 'Approval Matrix Template',
        type: 'Governance Template',
        status: 'Coming Soon',
        description:
          'Define approval levels by department, transaction type, value threshold, and responsibility.',
        bestFor: 'Finance, procurement, operations, management',
        problem:
          'Approvals are unclear, inconsistent, or dependent on informal authority.',
        outcome:
          'Create a simple approval governance structure by value, process, department, and role.',
        included: [
          'Approval level matrix',
          'Department-wise authority table',
          'Value threshold structure',
          'Exception approval notes',
        ],
      },
    ],
  },
  {
    id: 'excel-tools',
    title: 'Excel Business Tools',
    shortTitle: 'Excel Tools',
    description:
      'Excel tools for inventory, sales, payments, reconciliation, KPI tracking, and daily management.',
    funnelQuestion: 'Do you need a practical tool before building a full system?',
    products: [
      {
        slug: 'inventory-ageing-template',
        name: 'Inventory Ageing Template',
        type: 'Excel Tool',
        status: 'Coming Soon',
        description:
          'Analyze stock by ageing bucket, item category, warehouse, expiry risk, and slow-moving inventory.',
        bestFor: 'SCM, warehouse, finance, inventory control',
        problem:
          'Management cannot clearly see old, slow-moving, or risky inventory.',
        outcome:
          'Identify ageing stock, risky inventory, and warehouse-level stock issues quickly.',
        included: [
          'Ageing buckets',
          'Warehouse filter',
          'Category summary',
          'Slow-moving stock view',
          'Expiry risk view',
        ],
      },
      {
        slug: 'stock-reconciliation-template',
        name: 'Stock Reconciliation Template',
        type: 'Excel Tool',
        status: 'Coming Soon',
        description:
          'Compare system stock, counted stock, variance, adjustment reason, and approval status.',
        bestFor: 'Warehouse teams, auditors, finance controllers',
        problem:
          'Stock variance is found, but reconciliation is messy and poorly documented.',
        outcome:
          'Create a clean variance file with reasons, approval status, and adjustment control.',
        included: [
          'System vs counted quantity',
          'Variance calculation',
          'Reason codes',
          'Approval status',
          'Adjustment summary',
        ],
      },
    ],
  },
  {
    id: 'data-products',
    title: 'Data & Reporting Products',
    shortTitle: 'Data Products',
    description:
      'SQL models, Power BI templates, reporting packs, and automation structures for management visibility.',
    funnelQuestion: 'Do you need better visibility from your business data?',
    products: [
      {
        slug: 'sap-b1-sales-reporting-pack',
        name: 'SAP B1 Sales Reporting Pack',
        type: 'SQL / BI Pack',
        status: 'Coming Soon',
        description:
          'A structured reporting model for sales invoices, credit notes, customers, items, branches, and margins.',
        bestFor: 'SAP B1 users, BI teams, business analysts',
        problem:
          'SAP has the data, but management reporting is slow, manual, and not decision-ready.',
        outcome:
          'Create a clean sales reporting layer for dashboards, Excel, and automated reports.',
        included: [
          'Sales invoice model',
          'Credit note model',
          'Customer fields',
          'Item fields',
          'Branch and warehouse fields',
          'Margin-ready structure',
        ],
      },
      {
        slug: 'daily-sales-report-automation',
        name: 'Daily Sales Report Automation',
        type: 'Reporting Workflow',
        status: 'Coming Soon',
        description:
          'A reusable structure for daily sales reports distributed through email, WhatsApp, or dashboards.',
        bestFor: 'Management teams, sales leaders, business owners',
        problem:
          'Daily sales updates are manually prepared and delayed.',
        outcome:
          'Automate daily business reporting with consistent timing, format, and distribution.',
        included: [
          'Daily sales structure',
          'Email report format',
          'WhatsApp-ready message structure',
          'Summary KPIs',
          'Branch/category breakdown',
        ],
      },
    ],
  },
  {
    id: 'small-apps',
    title: 'Small Business Applications',
    shortTitle: 'Business Apps',
    description:
      'Lightweight workflow apps for incidents, stock transfers, inventory counts, approvals, and action tracking.',
    funnelQuestion: 'Do you need a small workflow app instead of another spreadsheet?',
    products: [
      {
        slug: 'incident-management-app',
        name: 'Incident Management App',
        type: 'Web App',
        status: 'Demo Planned',
        description:
          'Track incidents, observations, categories, severity, owners, actions, and closure status.',
        bestFor: 'Internal control, audit, operations, management',
        problem:
          'Incidents and observations are reported informally and follow-up is weak.',
        outcome:
          'Create a controlled workflow for logging, assigning, reviewing, and closing incidents.',
        included: [
          'Incident creation',
          'Observation logging',
          'Severity and priority',
          'Owner assignment',
          'Status tracking',
          'Management dashboard',
        ],
      },
      {
        slug: 'stock-transfer-control-app',
        name: 'Stock Transfer Control App',
        type: 'Web App',
        status: 'Demo Planned',
        description:
          'Create, review, approve, and track warehouse stock transfers with item, batch, and status control.',
        bestFor: 'Warehouse teams, SCM, operations control',
        problem:
          'Stock transfers happen through Excel, messages, and disconnected manual approvals.',
        outcome:
          'Control transfer requests, drafts, approvals, items, batches, and transfer history in one app.',
        included: [
          'STN entry',
          'Draft workflow',
          'Approval flow',
          'Item and batch lines',
          'Status tracking',
          'Transfer history',
        ],
      },
    ],
  },
]

export function getProductCategory(categoryId) {
  return productCategories.find((category) => category.id === categoryId)
}

export function getProduct(categoryId, productSlug) {
  const category = getProductCategory(categoryId)
  if (!category) return null

  return category.products.find((product) => product.slug === productSlug)
}