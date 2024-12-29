import { Card, CardContent, CardFooter } from '../ui/card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function AddressCard({ addressInfo, handleDeleteAddress, handleEditAddress, setCurrentSelectedAddress }) {
    return (
        <div>
            <Card onClick={setCurrentSelectedAddress ? () => setCurrentSelectedAddress(addressInfo) : null}>
                <CardContent className='grid gap-4 p-4'>
                    <Label>Address: {addressInfo?.address}</Label>
                    <Label>City: {addressInfo?.city}</Label>
                    <Label>Pincode: {addressInfo?.pincode}</Label>
                    <Label>Phone: {addressInfo?.phone}</Label>
                    <Label>Notes: {addressInfo?.notes}</Label>
                </CardContent>
                <CardFooter className='p-3 flex justify-between'>
                    <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
                    <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AddressCard
