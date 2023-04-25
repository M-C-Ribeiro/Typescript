import { Router } from "express";
import { createCategory } from "./app/useCases/categories/createCategories";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories 
router.get("/categories", listCategories);

// Create category
router.post("/products", createCategory);