using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class cartitem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmployeeAge",
                table: "Employees",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeRole",
                table: "Employees",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Employees",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkExp",
                table: "Employees",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cartitems",
                columns: table => new
                {
                    ProductID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Src = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Price = table.Column<string>(nullable: true),
                    Colour = table.Column<string>(nullable: true),
                    Count = table.Column<string>(nullable: true),
                    Total = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cartitems", x => x.ProductID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cartitems");

            migrationBuilder.DropColumn(
                name: "EmployeeAge",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "EmployeeRole",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "WorkExp",
                table: "Employees");
        }
    }
}
