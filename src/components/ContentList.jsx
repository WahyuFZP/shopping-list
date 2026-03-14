import ShoppingItem from "./ShoppingItem";
import { AlignStartVertical } from "lucide-react";
import { Button } from "@/components/ui/button";   
import { Progress } from "@/components/ui/progress";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ContentList({
  items,
  togglePacked,
  sortBy,
  setSortBy,
  totalItems,
  removeItem,
  progress,
  editItem,
}) {
  return (
    <div className="list space-y-5">

      {/* HEADER */}
      <div>
        <h3 className="text-lg font-semibold">My List</h3>
        <p className="text-sm text-muted-foreground">
          Your shopping list will appear here
        </p>
      </div>

      {/* PROGRESS */}
      <Field className="w-full max-w-sm">
        <FieldLabel htmlFor="progress-upload" className="flex">
          <span>Upload progress</span>
          <span className="ml-auto">{progress}%</span>
        </FieldLabel>

        <Progress value={progress} id="progress-upload" />
      </Field>

      {/* SORT */}
      <div className="flex items-center">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className=" justify-start gap-2">
            <AlignStartVertical className="h-4 w-4" />
            <SelectValue placeholder="Sort items" />
          </SelectTrigger>

          <SelectContent align="start" className="w-56">
            <SelectItem value="input">Sort by input order</SelectItem>
            <SelectItem value="name">Sort by name</SelectItem>
            <SelectItem value="packed">Sort by packed status</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* LIST */}
      <ul className="space-y-3">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            togglePacked={togglePacked}
            removeItem={removeItem}
            editItem={editItem}
          />
        ))}
      </ul>

      {/* STATS */}
      <div className="stats">
        <p>Total items: {totalItems}</p>
      </div>
      <p>
                
      </p>
    </div>
  );
}

export default ContentList;