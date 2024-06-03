'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CarSearchForm from '@/components/CarSearchForm';
import CarList from '@/components/CarList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const Cars = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CarSearchForm></CarSearchForm>
    </QueryClientProvider>
  );
};

export default Cars;
