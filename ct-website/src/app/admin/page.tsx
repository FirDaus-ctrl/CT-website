"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"


interface Product {
  id: number
  name: string
  description: string
  category: string
  featured: boolean
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Enterprise Cloud Infrastructure",
    description: "Scalable cloud solutions for modern businesses",
    category: "Cloud Solutions",
    featured: true,
  },
  {
    id: 2,
    name: "Cybersecurity Suite",
    description: "Comprehensive security solutions for enterprise",
    category: "Security",
    featured: true,
  },
  {
    id: 3,
    name: "Network Infrastructure",
    description: "High-performance networking solutions",
    category: "Networking",
    featured: false,
  },
]

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isEditing, setIsEditing] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Product>>({})

  const handleEdit = (product: Product) => {
    setIsEditing(product.id)
    setEditForm(product)
  }

  const handleSave = () => {
    if (isEditing && editForm.id) {
      setProducts((prev) => prev.map((p) => (p.id === editForm.id ? { ...p, ...editForm } : p)))
      setIsEditing(null)
      setEditForm({})
    }
  }

  const handleAdd = () => {
    const newId = Math.max(...products.map((p) => p.id)) + 1
    const newProduct: Product = {
      id: newId,
      name: "New Solution",
      description: "New solution description",
      category: "New Category",
      featured: false,
    }
    setProducts((prev) => [...prev, newProduct])
    handleEdit(newProduct)
  }

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <Button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Solution
        </Button>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-3">
                    {isEditing === product.id ? (
                      <Input
                        value={editForm.name || ""}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                        className="text-lg font-semibold"
                      />
                    ) : (
                      product.name
                    )}
                    {product.featured && <Badge className="bg-blue-600">Featured</Badge>}
                  </CardTitle>
                  {isEditing === product.id ? (
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label>Category</Label>
                        <Input
                          value={editForm.category || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, category: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea
                          value={editForm.description || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`featured-${product.id}`}
                          checked={editForm.featured || false}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, featured: e.target.checked }))}
                        />
                        <Label htmlFor={`featured-${product.id}`}>Featured Solution</Label>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {isEditing === product.id ? (
                    <>
                      <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                        Save
                      </Button>
                      <Button
                        onClick={() => {
                          setIsEditing(null)
                          setEditForm({})
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleEdit(product)} variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button onClick={() => handleDelete(product.id)} variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isEditing !== product.id && <p className="text-gray-600">{product.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
