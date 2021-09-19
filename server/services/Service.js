class Service {
    constructor(Model, modelType) {
        this.Model = Model;
        this.modelType = modelType;
    };
    create = async (req, res) => {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                error: `You must provide a ${this.modelType}`
            });
        }
        const model = new this.Model(req.body);
        if (!model) {
            return res.status(400).json({
                success: false,
                error: 'Model creation error'
            });
        }
        await model.save().then((model, error) => {
            if (!!error) {
                return res.status(400).json({
                    error,
                    message: `${this.modelType} not created`
                });
            }
            return res.status(201).json({
                success: true,
                id: model._id,
                message: `${this.modelType} created`
            });
        });
    };
    fetch = async (req, res) => {
        await this.Model.findOne({_id: req.params.id}).then((model, error) => {
            if (!!error) {
                return res.status(400).json({
                    success: false,
                    error: error
                });
            }
            if (!model) {
                return res.status(404).json({
                    success: false,
                    error: `${this.modelType} not found`
                });
            }
            return res.status(200).json({
                success: true,
                data: model
            });
        });
    };
}

module.exports = Service;