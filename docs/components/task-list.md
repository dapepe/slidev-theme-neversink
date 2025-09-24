# TaskList Component

A flexible task management component for displaying project status, todo lists, and progress tracking with visual status indicators.

## Usage

```vue
<TaskList
  title="Sprint Tasks"
  subtitle="Development Progress"
  :tasks="[
    { title: 'Setup Environment', status: 'completed', comment: 'Done early!' },
    { title: 'Build API', status: 'in-progress' },
    { title: 'Write Tests', status: 'pending' },
    { title: 'Fix Bug #123', status: 'error', comment: 'Needs investigation' }
  ]"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | `'Ongoing tasks'` | Main title of the task list |
| `subtitle` | String | `''` | Optional subtitle |
| `tasks` | Array | `[]` | Array of task objects |

## Task Object Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | String | ✅ | Task title/name |
| `status` | String | ✅ | Task status (see statuses below) |
| `comment` | String | ❌ | Optional additional comment |

## Task Statuses

| Status | Icon | Color | Description |
|--------|------|-------|-------------|
| `completed` | ✅ Checkmark | Green | Task is finished |
| `error` | ⚠️ Warning | Red | Task has an error |
| `in-progress` | ▶️ Play | Blue | Task is being worked on |
| `pending` | ⭕ Circle | Gray | Task is waiting |

## Examples

### Simple Task List
```vue
<TaskList
  title="Development Tasks"
  :tasks="[
    { title: 'Setup development environment', status: 'completed' },
    { title: 'Write documentation', status: 'in-progress' },
    { title: 'Deploy to production', status: 'pending' }
  ]"
/>
```

### With Comments
```vue
<TaskList
  title="Release Checklist"
  subtitle="Version 2.1.0"
  :tasks="[
    { 
      title: 'Database Migration', 
      status: 'completed',
      comment: 'Completed ahead of schedule'
    },
    { 
      title: 'API Integration', 
      status: 'error',
      comment: 'Authentication issues - needs investigation'
    },
    { 
      title: 'UI Testing', 
      status: 'in-progress'
    }
  ]"
/>
```

### Multiple Task Lists
```vue
<div class="grid grid-cols-2 gap-8">
  <TaskList
    title="Frontend"
    :tasks="[
      { title: 'UI Design', status: 'completed' },
      { title: 'Components', status: 'in-progress' },
      { title: 'Testing', status: 'pending' }
    ]"
  />
  
  <TaskList
    title="Backend"
    :tasks="[
      { title: 'Database', status: 'completed' },
      { title: 'API Routes', status: 'in-progress' },
      { title: 'Security', status: 'error' }
    ]"
  />
</div>
```

### Inline Usage
```vue
## Project Status

<TaskList :tasks="[
  { title: 'Research', status: 'completed' },
  { title: 'Development', status: 'in-progress' },
  { title: 'Testing', status: 'pending' }
]" />

More content here...
```

## Features

- **Compact Design**: Minimal spacing for clean presentation
- **Status Icons**: Visual indicators for different task states
- **Color Coding**: Automatic status-based colors
- **Hover Effects**: Smooth animations on interaction
- **Flexible**: Can be used anywhere in your slides
- **Responsive**: Works well in different layouts

## Best Practices

1. **Keep titles concise** - Use short, descriptive task names
2. **Use comments sparingly** - Only when they add value
3. **Group related tasks** - Organize by project or category
4. **Update statuses regularly** - Keep information current
5. **Combine with layouts** - Use in grids for multiple lists
