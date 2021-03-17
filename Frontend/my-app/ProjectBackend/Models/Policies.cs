using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class Policies
    {
        public int Id { get; set; }
        public const string Admin = "Admin";

        public const string Customer = "Customer";

        public const string Employee = "Employee";

        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();
        }

        public static AuthorizationPolicy CustomerPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Customer).Build();
        }

        public static AuthorizationPolicy EmployeePolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Employee).Build();
        }
    }
}
