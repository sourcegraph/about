/// <reference types="React" />

declare module 'rehype-react' {
    interface Options {
        // Function to use to create ReactElements
        createElement: typeof React.createElement

        // Prefix for key to use on generated ReactElements
        // Optional: defaults to 'h-'
        prefix?: string

        // Register components
        // Optional: defaults to {}
        components?: {
            [name: string]: React.ComponentType
        }
    }

    interface Rehype2ReactInstance {
        Compiler: (node: any) => React.ComponentType
    }

    interface Rehype2ReactConstructor {
        new (options: Options): Rehype2ReactInstance
    }

    /**
     * Attach a react compiler.
     *
     * @param {Unified} processor - Instance.
     * @param {Object?} [options]
     */
    const rehype2react: Rehype2ReactConstructor

    export = rehype2react
}
