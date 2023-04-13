import Category from "../models/categoryModel";

// To get all the category 
export const getAllCategory = async (req, res)=>{
    try{
        const category = new Category.find();
        res.status(200).json({message:error.message});
    } catch{
        res.status(500).json({message:error.message});
    }
};


// to add a category 

export const addCategory = async(req, res)=>{
    const {name}= req.body;
    const category= new Category({name:name});
    try{
        const newCategory= await category.save();
        res.status(201).json(newCategory);
    } catch{
        res.status(400).json({message:error.message});
    }
};


// to get category by ID

export const getCategoryById = async (req, res)=>{
    try{
        const category= await Category.findById(req.params.categoryId);
        if(!category){
            return res.status(404).json({message: 'Category Not Found'});
        }
        res.status(200).json(category);
    } catch{
        res.status(500).json({message:error.message});
    }
};

// to edit category by Id 

export const updateCategoById = async (req, res)=>{
    try{
        const category = await Category.findById(req.params.categoryId);
        if (!category){
            return res.status(404).json({message:"Category Not Found"});
        }
        category.name= req.body.name || category.name;
        const updated = await category.save();
        res.status(200).json(updated);
    } catch{
        res.status(500).json({message: error.message});
    }
}

