import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useAddress } from "./store/useAddress";
import { Plus } from "lucide-react";

function AddresModal() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const { addAddress } = useAddress();

  const handleSubmit = () => {
    addAddress({ fullName, phone, address, title });
    setFullName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="relative w-full flex items-center justify-center border-dashed border border-gray-400 my-6">
      <AlertDialog>
        <AlertDialogTrigger asChild className="w-[200px]">
          <Button
            variant="ghost"
            className="absolute -top-3 bg-white px-4 flex flex-col items-center gap-1"
          >
            <span className="bg-black text-white rounded-full w-6 h-6 flex justify-center items-center">
              <Plus className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium text-gray-700">
              Add New Address
            </span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enter your address</AlertDialogTitle>
            <div className="space-y-2 mt-3">
              <Input
                placeholder="Enter your FullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                placeholder="Enter your Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AddresModal;
