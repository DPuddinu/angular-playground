import { Question } from '../models/question.interface';

const BEGINNER_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'What is the main building block of Angular applications?',
    options: ['Components', 'Modules', 'Services', 'Templates'],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Components are the main building blocks of Angular applications. They control a portion of the screen called a view.',
  },
  {
    id: 2,
    text: 'Which decorator is used to define a component?',
    options: ['@Component', '@NgModule', '@Injectable', '@Directive'],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The @Component decorator identifies a class as a component and provides metadata about the component.',
  },
  {
    id: 3,
    text: 'What is the purpose of ngOnInit?',
    options: [
      'To initialize the component after Angular first displays the data-bound properties',
      'To destroy the component',
      'To detect changes',
      'To handle errors',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.',
  },
  {
    id: 4,
    text: 'What is interpolation in Angular?',
    options: [
      'Using {{ }} to display component properties',
      'Using [] for property binding',
      'Using () for event binding',
      'Using # for template variables',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Interpolation refers to embedding expressions into marked up text using {{ }} syntax.',
  },
  {
    id: 5,
    text: 'Which command is used to create a new Angular project?',
    options: [
      'ng new project-name',
      'ng create project-name',
      'ng start project-name',
      'ng init project-name',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'ng new is the Angular CLI command used to create a new Angular project with a default configuration.',
  },
  {
    id: 6,
    text: 'What is a directive in Angular?',
    options: [
      'A class that adds behavior to elements in your Angular applications',
      'A service for HTTP requests',
      'A component for routing',
      'A module for forms',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Directives are classes that add additional behavior to elements in your Angular applications.',
  },
  {
    id: 7,
    text: 'What is the purpose of a service in Angular?',
    options: [
      'To encapsulate business logic and data access',
      'To define a component',
      'To handle routing',
      'To manage forms',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Services in Angular are used to encapsulate business logic and data access, making them reusable across components.',
  },
  {
    id: 8,
    text: 'What is the Angular CLI?',
    options: [
      'A command-line interface tool to initialize, develop, scaffold, and maintain Angular applications',
      'A library for HTTP requests',
      'A module for forms',
      'A service for routing',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The Angular CLI is a command-line interface tool that helps you initialize, develop, scaffold, and maintain Angular applications.',
  },
  {
    id: 9,
    text: 'What is a module in Angular?',
    options: [
      'A container for a cohesive block of code dedicated to an application domain, workflow, or closely related set of capabilities',
      'A service for HTTP requests',
      'A component for routing',
      'A directive for forms',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Modules are containers for a cohesive block of code dedicated to an application domain, workflow, or closely related set of capabilities.',
  },
  {
    id: 10,
    text: 'What is the purpose of the @NgModule decorator?',
    options: [
      'To define a module and provide metadata about the module',
      'To define a component',
      'To handle routing',
      'To manage forms',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The @NgModule decorator is used to define a module and provide metadata about the module.',
  },
  {
    id: 11,
    text: "What is the purpose of Angular's data binding?",
    options: [
      'To synchronize data between the model and the view',
      'To handle HTTP requests',
      'To manage routing',
      'To define a component',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'Data binding in Angular is used to synchronize data between the model and the view.',
  },
  {
    id: 12,
    text: 'Which of the following is a structural directive in Angular?',
    options: ['*ngIf', 'ngModel', 'ngClass', 'ngStyle'],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      '*ngIf is a structural directive that conditionally includes a template based on the value of an expression.',
  },
  {
    id: 13,
    text: 'What is the purpose of the Angular Router?',
    options: [
      'To navigate between different views or components',
      'To handle form validation',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The Angular Router is used to navigate between different views or components in an application.',
  },
  {
    id: 14,
    text: 'What is a template in Angular?',
    options: [
      'HTML that defines the view for a component',
      'A service for HTTP requests',
      'A module for forms',
      'A directive for styling',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'A template in Angular is HTML that defines the view for a component.',
  },
  {
    id: 15,
    text: 'What is the purpose of the @Input decorator?',
    options: [
      'To pass data from a parent component to a child component',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The @Input decorator is used to pass data from a parent component to a child component.',
  },
  {
    id: 16,
    text: 'What is the purpose of the @Output decorator?',
    options: [
      'To emit events from a child component to a parent component',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The @Output decorator is used to emit events from a child component to a parent component.',
  },
  {
    id: 17,
    text: 'What is the purpose of the ngFor directive?',
    options: [
      'To iterate over a list and render a template for each item',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The ngFor directive is used to iterate over a list and render a template for each item.',
  },
  {
    id: 18,
    text: 'What is the purpose of the ngClass directive?',
    options: [
      'To dynamically add or remove CSS classes',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The ngClass directive is used to dynamically add or remove CSS classes based on an expression.',
  },
  {
    id: 19,
    text: 'What is the purpose of the ngStyle directive?',
    options: [
      'To dynamically set inline styles',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The ngStyle directive is used to dynamically set inline styles based on an expression.',
  },
  {
    id: 20,
    text: 'What is the purpose of the ngModel directive?',
    options: [
      'To create two-way data binding between form inputs and component properties',
      'To handle form submissions',
      'To manage state',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    explanation:
      'The ngModel directive is used to create two-way data binding between form inputs and component properties.',
  },
];
const INTERMEDIATE_QUESTIONS: Question[] = [
  {
    id: 71,
    text: 'What is the purpose of NgZone in Angular?',
    options: [
      'Manages change detection',
      'Handles routing',
      'Manages state',
      'Handles HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'NgZone is a service for executing work inside or outside of the Angular zone. It helps manage change detection and performance optimization.',
  },
  {
    id: 72,
    text: 'What is the difference between ViewChild and ContentChild?',
    options: [
      'ViewChild queries elements in template, ContentChild queries projected content',
      'They are the same thing',
      'ViewChild is for parent components, ContentChild for child components',
      'ViewChild is deprecated',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      "ViewChild decorators query elements that are part of the component's template, while ContentChild queries content that has been projected into the component.",
  },
  {
    id: 73,
    text: 'What is a pipe in Angular?',
    options: [
      'A way to transform data for display in a template',
      'A service for HTTP requests',
      'A component for routing',
      'A module for forms',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation: 'Pipes are a way to transform data for display in a template.',
  },
  {
    id: 74,
    text: 'What is the purpose of the async pipe?',
    options: [
      'To subscribe to an Observable or Promise and return the latest value',
      'To handle routing',
      'To manage forms',
      'To define a component',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.',
  },
  {
    id: 75,
    text: 'What is the difference between a template-driven form and a reactive form?',
    options: [
      'Template-driven forms are simpler and use directives, reactive forms are more powerful and use explicit models',
      'They are the same thing',
      'Template-driven forms are for HTTP requests',
      'Reactive forms are deprecated',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'Template-driven forms are simpler and use directives, while reactive forms are more powerful and use explicit models.',
  },
  {
    id: 76,
    text: 'What is the difference between switchMap, mergeMap, and concatMap operators?',
    options: [
      'switchMap cancels previous requests, mergeMap runs in parallel, concatMap maintains order',
      'They all do the same thing',
      'They are only used for HTTP requests',
      'They are deprecated operators',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'switchMap cancels previous observable subscriptions, mergeMap allows parallel execution, and concatMap waits for each observable to complete before starting the next one.',
  },
  {
    id: 77,
    text: "What is the purpose of Angular's ChangeDetectionStrategy?",
    options: [
      'To control how and when change detection runs for a component',
      'To handle HTTP requests',
      'To manage routing',
      'To validate forms',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'ChangeDetectionStrategy determines how a component responds to change detection. OnPush strategy improves performance by only checking for changes when inputs change or events occur.',
  },
  {
    id: 78,
    text: 'What is the difference between pure and impure pipes?',
    options: [
      'Pure pipes only execute when input changes, impure pipes execute on every change detection cycle',
      'They are the same thing',
      'Pure pipes are deprecated',
      'Impure pipes are only for async operations',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'Pure pipes cache their results and only recompute when inputs change, while impure pipes run on every change detection cycle.',
  },
  {
    id: 79,
    text: "What is the purpose of Angular's resolvers?",
    options: [
      'To pre-fetch data before activating a route',
      'To handle form validation',
      'To manage state',
      'To perform animations',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'Resolvers allow you to fetch data before a route is activated, ensuring the data is available when the component loads.',
  },
  {
    id: 80,
    text: 'What is the difference between Subject, BehaviorSubject, and ReplaySubject?',
    options: [
      'BehaviorSubject has initial value and last emission, ReplaySubject keeps history, Subject has neither',
      'They are all the same',
      'They are only used for HTTP requests',
      'They are deprecated features',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      "BehaviorSubject requires an initial value and emits the current value, ReplaySubject can emit previous values, while Subject doesn't have these features.",
  },
  {
    id: 81,
    text: "What is the purpose of Angular's ElementRef?",
    options: [
      'To directly access DOM elements, though its use is discouraged for security reasons',
      'To handle routing',
      'To manage forms',
      'To perform HTTP requests',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'ElementRef provides direct access to DOM elements, but its direct use is discouraged as it creates tight coupling with rendering layers.',
  },
  {
    id: 82,
    text: 'What is the difference between ngOnChanges and ngDoCheck?',
    options: [
      'ngOnChanges tracks input changes, ngDoCheck runs on every change detection',
      'They are the same thing',
      'ngOnChanges is deprecated',
      'ngDoCheck is only for forms',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'ngOnChanges is called when an input property changes, while ngDoCheck is called during every change detection run, allowing for custom change detection.',
  },
  {
    id: 83,
    text: 'What is the purpose of trackBy function in ngFor?',
    options: [
      'To improve performance by helping Angular track identity of items in arrays',
      'To sort array items',
      'To filter array items',
      'To validate array items',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'trackBy helps Angular identify which items have changed in an array, improving performance by preventing unnecessary DOM updates.',
  },
  {
    id: 84,
    text: 'What is content projection in Angular?',
    options: [
      'A way to insert content from a parent component into a child component',
      'A way to handle routing',
      'A way to manage state',
      'A way to handle forms',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'Content projection allows you to insert content from a parent component into a child component using the ng-content directive.',
  },
  {
    id: 85,
    text: "What is the purpose of Angular's HttpInterceptors?",
    options: [
      'To transform or handle HTTP requests and responses globally',
      'To handle routing',
      'To manage forms',
      'To perform animations',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'HttpInterceptors allow you to intercept and modify HTTP requests and responses globally, useful for adding headers, handling errors, or logging.',
  },
  {
    id: 86,
    text: "What is the primary purpose of Angular's Dependency Injection (DI)?",
    options: [
      'To manage the lifecycle of Angular components',
      'To handle HTTP requests',
      'To inject services into components or other services',
      'To improve application routing',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      'Dependency Injection in Angular is used to inject services into components or other services, allowing for modular and testable code.',
  },
  {
    id: 87,
    text: 'Which of the following directives is used to conditionally include a template?',
    options: ['*ngIf', '*ngFor', '*ngSwitch', '*ngInclude'],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'The *ngIf directive conditionally includes a template based on a Boolean expression.',
  },
  {
    id: 88,
    text: 'What does the Angular CLI command `ng generate component` do?',
    options: [
      'It compiles the Angular application',
      'It creates a new Angular project',
      'It generates a new component with its files',
      'It starts the Angular development server',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      'The `ng generate component` command creates a new component along with its template, style, and test files.',
  },
  {
    id: 89,
    text: "What is the purpose of Angular's `ViewChild` decorator?",
    options: [
      'To define a child route in the router',
      'To access a child component or DOM element in the component class',
      'To share data between parent and child components',
      'To create a reusable directive',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      "`ViewChild` is used to access child components, directives, or DOM elements directly in the parent component's class.",
  },
  {
    id: 90,
    text: 'Which lifecycle hook is used for initializing data in a component?',
    options: ['ngOnInit', 'ngOnDestroy', 'ngAfterViewInit', 'ngDoCheck'],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'The `ngOnInit` lifecycle hook is invoked after Angular has initialized all data-bound properties of a component.',
  },
  {
    id: 91,
    text: 'How can you pass data from a parent to a child component?',
    options: [
      'Using a service',
      'Using @Input decorator',
      'Using @Output decorator',
      'Using ngModel',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      'The `@Input` decorator is used to pass data from a parent component to a child component.',
  },
  {
    id: 92,
    text: 'What does the Angular Router use to match routes?',
    options: [
      'Template references',
      'Component selectors',
      'URL patterns',
      'Service names',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      "Angular Router matches routes based on URL patterns defined in the application's route configuration.",
  },
  {
    id: 93,
    text: "Which of these is true about Angular's `HttpClient`?",
    options: [
      'It is used for two-way binding',
      'It provides methods for making HTTP requests',
      'It initializes dependency injection',
      'It generates components',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      '`HttpClient` is a service in Angular used to make HTTP requests and handle their responses.',
  },
  {
    id: 94,
    text: 'How do you create a custom pipe in Angular?',
    options: [
      'By extending the Pipe class',
      'By using the @Pipe decorator',
      'By registering it in app.module.ts',
      'By creating a directive',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      'To create a custom pipe, you define a class with the `@Pipe` decorator and implement the `PipeTransform` interface.',
  },
  {
    id: 95,
    text: "What is the primary purpose of Angular's `ReactiveFormsModule`?",
    options: [
      'To provide validation for template-driven forms',
      'To create and manage reactive forms programmatically',
      'To initialize Angular services',
      'To enable dynamic component creation',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      '`ReactiveFormsModule` allows developers to build and manage forms programmatically with greater control.',
  },
  {
    id: 96,
    text: 'What is the difference between `Promise` and `Observable` in Angular?',
    options: [
      'Promise handles multiple events, Observable handles a single event',
      'Promise is synchronous, Observable is asynchronous',
      'Promise emits a single value, Observable can emit multiple values over time',
      'Promise is Angular-specific, Observable is not',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      '`Promise` emits a single value, while `Observable` emits multiple values over time and supports various operators.',
  },
  {
    id: 97,
    text: "What does Angular's `async` pipe do?",
    options: [
      'Handles asynchronous data streams in templates',
      'Creates asynchronous functions',
      'Delays component initialization',
      'None of the above',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'The `async` pipe automatically subscribes to an observable or promise and returns its emitted value.',
  },
  {
    id: 98,
    text: 'What is the purpose of the `RouterModule.forRoot()` method?',
    options: [
      'To create a feature module',
      'To define child routes',
      'To configure the root routes of an Angular application',
      'To manage services globally',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      '`RouterModule.forRoot()` is used to configure the main routes of an Angular application.',
  },
  {
    id: 99,
    text: 'How do you handle errors in an Angular HTTP request?',
    options: [
      'Using the catchError operator',
      'Using try-catch',
      'Using onError directive',
      'None of the above',
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    explanation:
      'The `catchError` operator from RxJS is used to handle errors in Angular HTTP requests.',
  },
  {
    id: 100,
    text: "What is the purpose of Angular's `ng-template`?",
    options: [
      'To define structural directives',
      'To define a reusable component',
      'To provide conditional rendering templates',
      'To manage data bindings',
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    explanation:
      '`ng-template` is used to define templates that can be conditionally rendered or reused in Angular.',
  },
  {
    id: 101,
    text: 'How do you unsubscribe from an Observable in Angular?',
    options: [
      'Using the unsubscribe method',
      'Using the takeUntil operator',
      'Using the async pipe',
      'All of the above',
    ],
    correctAnswer: 3,
    difficulty: 'intermediate',
    explanation:
      'You can unsubscribe using the `unsubscribe` method, `takeUntil` operator, or the `async` pipe for better resource management.',
  },
  {
    id: 102,
    text: 'What is the purpose of the `environment.ts` file in Angular?',
    options: [
      'To configure production settings',
      'To store environment-specific configuration values',
      'To manage application routes',
      'To enable lazy loading',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      'The `environment.ts` file stores environment-specific configuration values, such as API endpoints.',
  },
  {
    id: 103,
    text: 'Which operator would you use to combine multiple Observables into one in Angular?',
    options: ['merge', 'forkJoin', 'combineLatest', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'intermediate',
    explanation:
      'Operators like `merge`, `forkJoin`, and `combineLatest` can be used to combine Observables based on the specific use case.',
  },
  {
    id: 104,
    text: 'What is a pure pipe in Angular?',
    options: [
      'A pipe that changes input data',
      'A pipe that is executed only when its input changes',
      'A pipe used for mathematical calculations',
      'A pipe without any dependencies',
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    explanation:
      'A pure pipe is only executed when the pipe’s input properties change, improving performance.',
  },
];
const ADVANCED_QUESTIONS: Question[] = [
  {
    id: 151,
    text: 'What are the key differences between Signals and RxJS Observables?',
    options: [
      'Signals are simpler and synchronous, Observables handle complex async operations',
      'Signals and Observables are the same thing',
      'Signals are only for HTTP requests',
      'Observables are deprecated in favor of Signals',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Signals are designed for simpler state management and are synchronous, while Observables excel at handling complex async operations and data streams.',
  },
  {
    id: 152,
    text: 'What is Zone.js and why does Angular use it?',
    options: [
      'It handles change detection by monkey-patching async operations',
      "It's just for testing",
      "It's only for routing",
      "It's a build tool",
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Zone.js is a library that provides a mechanism called zones for intercepting and keeping track of async operations. Angular uses it for automatic change detection.',
  },
  {
    id: 153,
    text: 'What is the purpose of the Renderer2 service?',
    options: [
      'To manipulate elements in a way that works across different platforms',
      'To handle routing',
      'To manage forms',
      'To define a component',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Renderer2 is a service that allows you to manipulate elements in a way that works across different platforms.',
  },
  {
    id: 154,
    text: 'What is the Ivy compiler in Angular?',
    options: [
      'A new rendering engine that improves performance and reduces bundle size',
      'A service for HTTP requests',
      'A component for routing',
      'A module for forms',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "Ivy is Angular's new rendering engine that improves performance and reduces bundle size.",
  },
  {
    id: 155,
    text: 'What is the purpose of the Angular Universal?',
    options: [
      'To enable server-side rendering of Angular applications',
      'To handle routing',
      'To manage forms',
      'To define a component',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Angular Universal is a technology that enables server-side rendering of Angular applications.',
  },
  {
    id: 151,
    text: 'What are the key differences between Signals and RxJS Observables?',
    options: [
      'Signals are simpler, synchronous, and optimized for UI state, while Observables handle complex async operations',
      'They serve the same purpose and are interchangeable',
      'Signals are only for HTTP requests',
      'Observables are being replaced by Signals',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Signals are designed for simpler, synchronous state management with built-in change detection integration, while Observables excel at handling complex async operations and data streams.',
  },
  {
    id: 152,
    text: "How does Angular's Dependency Injection tree work with lazy-loaded modules?",
    options: [
      'Lazy-loaded modules create their own child injector with isolated provider scope',
      'They share the same injector as the root module',
      'They cannot have their own providers',
      'They always override root providers',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Lazy-loaded modules create their own child injector in the DI tree, allowing for module-specific service instances and provider isolation.',
  },
  {
    id: 153,
    text: "What is the purpose of Angular's Control Value Accessor?",
    options: [
      'To create custom form controls that work seamlessly with Angular forms',
      'To validate form inputs',
      'To style form controls',
      'To handle form submissions',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "ControlValueAccessor is an interface that bridges custom form controls with Angular's form directives, enabling two-way binding and validation.",
  },
  {
    id: 154,
    text: 'What is the difference between ViewEncapsulation.None, Emulated, and ShadowDom?',
    options: [
      'None has no encapsulation, Emulated uses unique attributes, ShadowDom uses native shadow DOM',
      'They all provide the same encapsulation',
      'ShadowDom is deprecated',
      'None is the recommended default',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "ViewEncapsulation determines how component styles are scoped: None has no isolation, Emulated uses Angular's emulation with unique attributes, and ShadowDom uses native browser shadow DOM.",
  },
  {
    id: 155,
    text: "How does Angular's Ivy compiler handle tree-shaking?",
    options: [
      'By generating code that enables better dead code elimination during bundling',
      "It doesn't affect tree-shaking",
      'Tree-shaking is handled manually',
      'Tree-shaking only works with specific bundlers',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Ivy generates code in a way that makes it easier for bundlers to identify and eliminate unused code, resulting in smaller bundle sizes.',
  },
  {
    id: 156,
    text: "What are the benefits of using Angular's standalone components?",
    options: [
      'Simplified dependency management, better tree-shaking, and no NgModule requirement',
      'They are just syntactic sugar',
      'They only work with specific Angular versions',
      'They reduce application performance',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Standalone components simplify Angular applications by eliminating NgModule boilerplate, improving tree-shaking, and making dependency management more explicit.',
  },
  {
    id: 157,
    text: "How does Angular's change detection handle async operations?",
    options: [
      'Through Zone.js which patches async operations and triggers change detection',
      "It doesn't handle async operations",
      'Only through manual detection',
      'Only with specific operators',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Zone.js patches all async operations (setTimeout, Promise, etc.) and notifies Angular to run change detection when they complete.',
  },
  {
    id: 158,
    text: "What is the purpose of Angular's defer block feature?",
    options: [
      'To lazy load template content based on triggers or conditions',
      'To defer HTTP requests',
      'To delay component initialization',
      'To postpone routing',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Defer blocks allow template content to be lazy loaded based on specific conditions or triggers, improving initial page load performance.',
  },
  {
    id: 159,
    text: 'How do Angular Signals handle derived state?',
    options: [
      'Through computed() signals that automatically update when dependencies change',
      'Through manual updates only',
      'Through NgRx only',
      'Through two-way binding',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Computed signals create derived state that automatically updates when their dependent signals change, providing efficient and reactive state management.',
  },
  {
    id: 160,
    text: "What is the purpose of Angular's hydration feature?",
    options: [
      'To reuse server-rendered DOM and restore client-side interactivity efficiently',
      'To handle water-related animations',
      'To manage state persistence',
      'To handle form validation',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Hydration allows Angular to reuse server-rendered DOM instead of re-rendering it on the client, improving performance and maintaining SEO benefits.',
  },
  {
    id: 161,
    text: 'How does Angular handle memory leaks in RxJS subscriptions?',
    options: [
      "It doesn't automatically - developers must manage unsubscription or use async pipe",
      'All subscriptions are automatically handled',
      'Memory leaks are not possible with RxJS',
      'Only through garbage collection',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "Angular doesn't automatically handle RxJS subscription cleanup. Developers must either manually unsubscribe, use takeUntil with ngOnDestroy, or use the async pipe.",
  },
  {
    id: 162,
    text: "What is the purpose of Angular's runOutsideAngular?",
    options: [
      'To execute code without triggering change detection',
      'To run code in a different zone',
      'To execute code asynchronously',
      'To bypass Angular security',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "runOutsideAngular allows code to be executed outside Angular's zone, preventing unnecessary change detection cycles and improving performance.",
  },
  {
    id: 163,
    text: 'How do you implement custom change detection strategy?',
    options: [
      'By implementing DoCheck interface and using ChangeDetectorRef',
      'By modifying Zone.js',
      'By using NgZone only',
      "It's not possible to customize",
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Custom change detection can be implemented by using the DoCheck interface along with ChangeDetectorRef to manually control when and how changes are detected.',
  },
  {
    id: 164,
    text: "What is the purpose of Angular's meta-reducers in NgRx?",
    options: [
      'To intercept and transform actions before they reach reducers',
      'To handle side effects',
      'To manage routes',
      'To validate store data',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Meta-reducers intercept actions before they reach reducers, allowing for cross-cutting concerns like logging, storage synchronization, or error handling.',
  },
  {
    id: 165,
    text: "How does Angular's Ahead-of-Time compilation differ from Just-in-Time?",
    options: [
      'AOT compiles templates during build, JIT compiles at runtime',
      'They are the same thing',
      'JIT is more efficient',
      'AOT is only for production',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'AOT compilation happens during build time, resulting in smaller bundle sizes and faster startup times compared to JIT which compiles templates at runtime.',
  },
  {
    id: 166,
    text: "What are Angular's Trusted Types and their purpose?",
    options: [
      'To prevent DOM-based XSS attacks by enforcing strict type checking',
      'To validate form inputs',
      'To type-check templates',
      'To ensure type safety in services',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Trusted Types is a web platform feature that Angular uses to prevent DOM-based XSS attacks by ensuring strict type checking for dangerous DOM APIs.',
  },
  {
    id: 167,
    text: "How does Angular's Dependency Injection handle circular dependencies?",
    options: [
      'Through forwardRef() function and careful provider configuration',
      'Circular dependencies are not possible',
      'Through automatic resolution',
      'By throwing an error',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "Angular handles circular dependencies using the forwardRef() function, which allows references to dependencies that haven't been defined yet.",
  },
  {
    id: 168,
    text: "What is the purpose of Angular's APP_INITIALIZER?",
    options: [
      'To execute code before app initialization completes',
      'To initialize components',
      'To handle routing',
      'To load modules',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'APP_INITIALIZER token allows execution of code (like loading configuration) before the application initialization completes.',
  },
  {
    id: 169,
    text: 'How does Angular handle Web Workers integration?',
    options: [
      'Through dedicated APIs and CLI commands for worker setup and communication',
      'Web Workers are not supported',
      'Only through third-party libraries',
      'Through manual configuration only',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Angular provides built-in support for Web Workers through CLI commands and APIs, enabling efficient background processing and improved performance.',
  },
  {
    id: 170,
    text: "What is the purpose of Angular's Incremental DOM?",
    options: [
      'To efficiently update the DOM by tracking changes at the element level',
      'To handle virtual DOM',
      'To manage templates',
      'To handle routing',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      "Incremental DOM is Angular's rendering engine that updates the DOM efficiently by tracking changes at the element level instead of using a virtual DOM.",
  },
  {
    id: 171,
    text: 'What is Angular Ivy and how does it improve the Angular framework?',
    options: [
      'A new CLI tool',
      'A new testing library',
      'A new rendering engine',
      'A new routing module',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'Angular Ivy is a new rendering engine for Angular, which improves speed, reduces bundle size, and makes the framework more flexible and extensible.',
  },
  {
    id: 172,
    text: 'Explain the purpose and use cases of Angular Elements.',
    options: [
      'For styling components',
      'For testing components',
      'For integrating Angular components into non-Angular projects',
      'For optimizing performance',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'Angular Elements allows developers to use Angular components within projects built on different frameworks or without a framework at all, by packaging them as custom elements.',
  },
  {
    id: 173,
    text: 'What are the main differences between Renderer2 and Renderer3 in Angular?',
    options: [
      'Renderer3 is for AngularJS compatibility',
      'Renderer3 is the Ivy renderer with improved performance',
      'Renderer2 is deprecated',
      'Renderer3 supports React components',
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    explanation:
      'Renderer3, introduced with Ivy, is designed for better performance and smaller bundle sizes compared to Renderer2.',
  },
  {
    id: 174,
    text: 'Describe the use and advantages of Angular Service Workers.',
    options: [
      'To make the app responsive',
      'To enable server-side rendering',
      'To enable PWA features like offline support and caching',
      'To improve component interaction',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'Angular Service Workers are used to create Progressive Web Applications (PWAs) by providing features like offline support, caching, and background sync.',
  },
  {
    id: 175,
    text: 'How does Angular handle dependency injection and what are the benefits?',
    options: [
      'Using a decorator pattern',
      'Using modules and services',
      'Using constructor functions',
      'Using templates and views',
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    explanation:
      'Angular handles dependency injection using a hierarchical injector system that provides services at various levels of the application, which enhances modularity and testability.',
  },
  {
    id: 176,
    text: 'Explain the concept of zone.js and its role in Angular.',
    options: [
      'For handling change detection',
      'For handling routing',
      'For handling forms',
      'For handling animations',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Zone.js is a library that helps Angular manage and detect asynchronous operations, thus simplifying change detection.',
  },
  {
    id: 177,
    text: 'What are Angular Schematics and how are they used?',
    options: [
      'For routing',
      'For automating code generation',
      'For testing',
      'For styling',
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    explanation:
      'Angular Schematics are templates used to generate or modify code automatically, which enhances developer productivity.',
  },
  {
    id: 178,
    text: 'How does Angular support lazy loading and why is it beneficial?',
    options: [
      'Through the Angular CLI',
      'Through modules and the router',
      'Through component inheritance',
      'Through service workers',
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    explanation:
      'Angular supports lazy loading through modules and the router by loading feature modules only when they are needed, which reduces initial load time and improves performance.',
  },
  {
    id: 179,
    text: 'What is the purpose of the HttpClientModule in Angular?',
    options: [
      'To handle form validation',
      'To provide animations',
      'To make HTTP requests',
      'To support internationalization',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'HttpClientModule is used to make HTTP requests to APIs, handle responses, and intercept requests and responses.',
  },
  {
    id: 180,
    text: 'Explain the Angular lifecycle hooks and their typical use cases.',
    options: [
      'To control service injection',
      'To handle routing',
      'To manage component lifecycles',
      'To handle form submissions',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      "Angular lifecycle hooks (e.g., OnInit, OnChanges, OnDestroy) are methods that allow developers to tap into key moments in a component's lifecycle to perform initialization, cleanup, or respond to changes.",
  },
  {
    id: 181,  
    text: 'How can you optimize an Angular application for better performance?',
    options: [
      'By using React',
      'By using decorators',
      'By using a monolithic architecture',
      'By employing techniques such as lazy loading, Ahead-of-Time (AOT) compilation, and change detection strategy',
    ],
    correctAnswer: 3,
    difficulty: 'advanced',
    explanation:
      'Optimizing an Angular application involves techniques like lazy loading, AOT compilation, optimizing change detection strategies, using OnPush strategy, and minimizing payload sizes.',
  },
  {
    id: 182,
    text: 'What is NgZone and how does it facilitate change detection in Angular?',
    options: [
      'It is used for styling components',
      'It manages routing',
      'It assists in running and managing asynchronous tasks outside the Angular zone to facilitate efficient change detection',
      'It is used for animation',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'NgZone helps run tasks outside the Angular zone to avoid unnecessary change detection, improving application performance.',
  },
  {
    id: 183,
    text: "Describe how Angular's change detection mechanism works.",
    options: [
      'It uses a custom event loop',
      'It constantly checks for changes in the DOM',
      'It uses a tree structure with an implicit algorithm to check and update the DOM as required',
      'It relies on external libraries',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      "Angular's change detection mechanism uses a tree of components with an implicit algorithm to detect changes and update the DOM efficiently.",
  },
  {
    id: 184,
    text: 'What are dynamic components in Angular and how are they used?',
    options: [
      'For creating animations',
      'For handling routing',
      'For creating components on the fly using ComponentFactoryResolver',
      'For form validation',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'Dynamic components in Angular are created at runtime using the ComponentFactoryResolver, which is useful for building components dynamically based on certain conditions.',
  },
  {
    id: 185,
    text: 'Explain the difference between template-driven and reactive forms in Angular.',
    options: [
      'Template-driven forms use Angular directives while reactive forms use a model-driven approach for more complex scenarios',
      'Template-driven forms are used for animations',
      'Reactive forms do not support validation',
      'Template-driven forms use services for form validation',
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    explanation:
      'Template-driven forms rely on Angular directives and templates for form creation and validation, whereas reactive forms use a model-driven approach with more control over form behavior and validation.',
  },
  {
    id: 186,
    text: 'What is the purpose of the Angular Universal module?',
    options: [
      'To handle form validation',
      'To provide server-side rendering capabilities',
      'To manage state',
      'To handle animations',
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    explanation:
      'Angular Universal is used for server-side rendering (SSR) to improve SEO and initial page load performance.',
  },
  {
    id: 187,
    text: 'Describe the ViewChild and ContentChild decorators and their differences.',
    options: [
      'For routing management',
      'For dependency injection',
      'ViewChild is used to access child components and elements, while ContentChild is used to access projected content',
      'For styling components',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      "ViewChild allows access to child components and elements within a component's template, while ContentChild allows access to content projected into the component via ng-content.",
  },
  {
    id: 188,
    text: 'What is the role of Angular CLI in application development?',
    options: [
      'To compile TypeScript code',
      'To manage CSS styles',
      'To streamline development tasks such as creating, testing, and deploying Angular applications',
      'To handle routing',
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    explanation:
      'Angular CLI (Command Line Interface) streamlines development by automating tasks like code generation, testing, building, and deployment of Angular applications.',
  },
];
export const difficultyLevels = ['beginner', 'intermediate', 'advanced'] as const;
export type Difficulty = (typeof difficultyLevels)[number];
export const QUESTIONS: Record<Difficulty, Question[]> = {
  beginner: BEGINNER_QUESTIONS,
  intermediate: INTERMEDIATE_QUESTIONS,
  advanced: ADVANCED_QUESTIONS,
};
