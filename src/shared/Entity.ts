export abstract class Entity<T = any> {
    private readonly _id: number
    private readonly props: T

    constructor (props: T, id: number) {
        this.props = props
        this._id = id
    }

    get id (): number {
        return this._id
    }
}    