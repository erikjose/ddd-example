export interface ServiceInterface<Input, Ouput> {
    execute (props: Input): Promise<Ouput>
}