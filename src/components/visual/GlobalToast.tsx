import React, { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { hideToast } from "../../features/ui/uiSlice";

const GlobalToast: React.FC = () => {
  const toastRef = useRef<Toast>(null);
  const dispatch = useDispatch();
  const toastState = useSelector((state: RootState) => state.global.ui.toast);

  useEffect(() => {
    if (toastState?.show) {
      toastRef.current?.show({
        severity: toastState.severity,
        summary: toastState.summary,
        detail: toastState.detail,
        life: 1500,
      });
      dispatch(hideToast());
    }
  }, [toastState, dispatch]);

  return <Toast ref={toastRef} />;
};

export default GlobalToast;
