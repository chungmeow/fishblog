module.exports = (Model, modelType) => {
    return ({
        create: (req, res) => {
            if (!req.body) {
                return res.status(400).json({
                    success: false,
                    error: `You must provide a ${modelType}`
                });
            }
            const model = new Model(req.body);
            if (!model) {
                return res.status(400).json({
                    success: false,
                    error: 'Model instantiation error'
                });
            }

            model
                .save()
                .then(() => {
                    return res.status(201).json({
                        success: true,
                        id: model._id,
                        message: `${modelType} created`
                    });
                })
                .catch(error => {
                    return res.status(400).json({
                        error,
                        message: `${modelType} not created`
                    });
                });
        },
        update: async (req, res) => {
            if (!req.body) {
                return res.status(400).json({
                    success: false,
                    error: 'You must provide a body to update'
                });
            }
            Model.findOne({_id: req.params.id}, (error, model) => {
                if (!!error) {
                    return res.status(404).json({
                        error,
                        message: `${modelType} not found`
                    });
                }
                //update user here
                model
                    .save()
                    .then(() => {
                        return res.status(200).json({
                            success: true,
                            id: model._id,
                            message: `${modelType} updated`,
                        });
                    })
                    .catch(error => {
                        return res.status(404).json({
                            error,
                            message: `${modelType} not updated`
                        });
                    });
            })
        },
        fetch: async (req, res) => {
            await Model.findOne({_id: req.params.id}, (error, model) => {
                if (!!error) {
                    return res.status(400).json({success: false, error: error});
                }
                if (!model) {
                    return res.status(404).json({success: false, error: `${modelType} not found`});
                }
                return res.status(200).json({success: true, data: model});
            }).catch(error => console.log(error));
            /*const model = await Model.findById(req.params.id);
            console.log(model);*/
        }
    });
};