using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class update2withbillingnewdesigncontroller : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address1",
                table: "BillingNewDesignTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address2",
                table: "BillingNewDesignTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "BillingNewDesignTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Designcode",
                table: "BillingNewDesignTable",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address1",
                table: "BillingNewDesignTable");

            migrationBuilder.DropColumn(
                name: "Address2",
                table: "BillingNewDesignTable");

            migrationBuilder.DropColumn(
                name: "City",
                table: "BillingNewDesignTable");

            migrationBuilder.DropColumn(
                name: "Designcode",
                table: "BillingNewDesignTable");
        }
    }
}
