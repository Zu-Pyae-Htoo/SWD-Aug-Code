import Swal from "sweetalert2";

export const toast = (icon="success",title="Deleted Successfully") => {
     const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon,
        title,
      });
}

export const comfirmBox = (callback,title="Are you sure you want to delete?",icon= "warning") => {
    Swal.fire({
        title ,
        text: "You won't be able to revert this!",
        icon,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
         callback();
        }
      });
}